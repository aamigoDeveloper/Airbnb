import { FieldValues, useForm } from "react-hook-form"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import Heading from "../Heading"
import { categories } from "../navbar/Categories"
import CategoryInput from "../CategoryInput"
import CountrySelect from "../CountrySelect"
import dynamic from "next/dynamic"
import Counter from "../Counter"

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

export default function RentModal() {
  const [steps, setSteps] = useState(STEPS.CATEGORY)
  const form = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  })

  const { handleSubmit, reset, setValue, watch } = form

  const category = watch("category")
  const location = watch("location")
  const guestCount = watch("guestCount")
  const roomCount = watch("roomCount")
  const bathroomCount = watch("bathroomCount")

  const Map = useMemo(
    () => dynamic(() => import("../Map"), { ssr: false }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  )

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    })
  }

  const onSubmit = (data: FieldValues) => {
    if (steps !== STEPS.PRICE) {
      return onNext()
    }
  }

  const onBack = () => {
    setSteps((value) => value - 1)
  }

  const onNext = () => {
    setSteps((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (steps === STEPS.PRICE) {
      return "Create"
    }

    return "Next"
  }, [steps])

  const secondaryActionLabel = useMemo(() => {
    if (steps === STEPS.CATEGORY) {
      return undefined
    }

    return "Back"
  }, [steps])

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best descibes your place?"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              icon={item.icon}
              label={item.label}
              selected={category === item.label}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if (steps === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    )
  }

  if (steps === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subtitle="What amenities do you have?"
        />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(guest) => setCustomValue("guestCount", guest)}
        />
        <hr />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have?"
          value={roomCount}
          onChange={(room) => setCustomValue("roomCount", room)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          value={bathroomCount}
          onChange={(bathroom) => setCustomValue("bathroomCount", bathroom)}
        />
      </div>
    )
  }

  return (
    <Modal
      title="Airbnb your Home!"
      body={bodyContent}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryAction={steps === STEPS.CATEGORY ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
    />
  )
}
