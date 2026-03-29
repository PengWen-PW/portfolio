"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const mailtoLink = `mailto:pengwen23@mails.ucas.ac.cn?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `姓名: ${name}\n邮箱: ${email}\n\n${message}`
    )}`

    window.location.href = mailtoLink
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <motion.form
      className="space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            姓名
          </label>
          <motion.input
            id="name"
            name="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800"
            placeholder="您的姓名"
            required
            whileFocus="focus"
            variants={inputVariants}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            邮箱
          </label>
          <motion.input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800"
            placeholder="your@email.com"
            required
            whileFocus="focus"
            variants={inputVariants}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          主题
        </label>
        <motion.input
          id="subject"
          name="subject"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800"
          placeholder="邮件主题"
          required
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          内容
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800"
          placeholder="请输入您的留言..."
          required
          whileFocus="focus"
          variants={inputVariants}
        ></motion.textarea>
      </div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button type="submit" className="w-full relative overflow-hidden group">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            发送邮件
          </span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </Button>
      </motion.div>
    </motion.form>
  )
}
