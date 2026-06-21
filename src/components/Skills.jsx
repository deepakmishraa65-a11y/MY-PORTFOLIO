import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

      <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span>{skill.name}</span>
              <span className="text-violet-500">{skill.level}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
