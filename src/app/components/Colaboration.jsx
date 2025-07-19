import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function InteractiveMap() {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 0,
      label: t.step1Label,
      title: t.step1Title,
      desc: t.step1Desc,
      image: "/images/poznaje.png",
    },
    {
      id: 1,
      label: t.step2Label,
      title: t.step2Title,
      desc: t.step2Desc,
      image: "/images/projekt.png",
    },
    {
      id: 2,
      label: t.step3Label,
      title: t.step3Title,
      desc: t.step3Desc,
      image: "/images/kodowanie.png",
    },
    {
      id: 3,
      label: t.step4Label,
      title: t.step4Title,
      desc: t.step4Desc,
      image: "/images/odbior.png",
    },
  ]

  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-header text-h2 self-start text-white text-center">
        {t.collaborationTitle}
      </h2>

      <div className="flex flex-col md:flex-row  gap-16 md:gap-32 max-h-1/2 w-full  md:justify-between md:items-between ">
        <div className="flex md: flex-col md:w-1/2 justify-between gap-2  flex-nowrap md:gap-4">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`font-header border-2 px-2 md:px-4 py-2 rounded-md text-lg md:text-2xl lg:text-4xl md:w-3/4  transition-all ${
                activeStep === index
                  ? "text-black bg-secondary border-secondary"
                  : "text-white border-white hover:bg-white/10"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" >
          <motion.div
            key={steps[activeStep].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center  md:w-1/2   justify-around gap-4   text-center "
          >
            <div className="flex flex-col gap-4  md:h-full">
              <p className="text-h3 text-white font-semibold font-header leading-none">
                {steps[activeStep].title}
              </p>
              <p className="text-body lg:text-2xl text-white/70 max-w-xl font-body mt-">
                {steps[activeStep].desc}
              </p>
            </div>
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="object-contain aspect-video min-w-none rounded-lg lg:h-full h-[200px] md:max-h-[350px] "
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}