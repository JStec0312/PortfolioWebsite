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

      <div className="flex justify-between gap-2 flex-nowrap md:gap-4">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`font-header border-2 px-2 md:px-4 py-2 rounded-md text-sm md:text-2xl lg:text-4xl w-full transition-all ${
              activeStep === index
                ? "text-black bg-secondary border-secondary"
                : "text-white border-white hover:bg-white/10"
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={steps[activeStep].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4 mt-8 text-center"
        >
          <p className="text-h3 text-white font-semibold font-header leading-none">
            {steps[activeStep].title}
          </p>
          <p className="text-body lg:text-2xl text-white/70 max-w-xl font-body mt-">
            {steps[activeStep].desc}
          </p>
          <img
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            className="aspect-video min-w-none w-full max-w-[400px] md:min-w-[600px] lg:min-w-[800px] object-contain"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
