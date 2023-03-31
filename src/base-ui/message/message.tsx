/*
 * @version:
 * @Author: wenlan
 * @Date: 2023-03-16 14:31:12
 * @LastEditors: wenlan
 * @LastEditTime: 2023-03-17 17:35:32
 */
import MyToast from './index'
import type { MessageProps } from './index'
import { createRoot } from 'react-dom/client'
import { ReactNode } from 'react'
class Toast {
  static dom: HTMLElement
  static success({ content, duration }: MessageProps): void {
    const jsxDom: ReactNode = <MyToast content={content} duration={duration} type="success"></MyToast>
    Toast.dom = document.createElement('div')
    Toast.dom.className = 'message'
    createRoot(Toast.dom).render(jsxDom)
    document.body.appendChild(Toast.dom)
  }
  static error({ content, duration }: MessageProps): void {
    const jsxDom: ReactNode = <MyToast content={content} duration={duration} type="error"></MyToast>
    Toast.dom = document.createElement('div')
    createRoot(Toast.dom).render(jsxDom)
    document.body.appendChild(Toast.dom)
  }
  static info({ content, duration }: MessageProps): void {
    const jsxDom: ReactNode = <MyToast content={content} duration={duration} type="info"></MyToast>
    Toast.dom = document.createElement('div')
    createRoot(Toast.dom).render(jsxDom)
    document.body.appendChild(Toast.dom)
  }
  static warning({ content, duration }: MessageProps): void {
    const jsxDom: ReactNode = <MyToast content={content} duration={duration} type="warning"></MyToast>
    Toast.dom = document.createElement('div')
    createRoot(Toast.dom).render(jsxDom)
    document.body.appendChild(Toast.dom)
  }
}
export default Toast
