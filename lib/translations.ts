// Chinese translations for LiveKit Meet
export const translations = {
  // Settings Menu
  'Media Devices': '媒体设备',
  'Recording': '录制',
  'Camera': '摄像头',
  'Microphone': '麦克风',
  'Speaker & Headphones': '扬声器和耳机',
  'Audio Output': '音频输出',
  'Record Meeting': '录制会议',
  'Meeting is currently being recorded': '会议正在录制中',
  'No active recordings for this meeting': '此会议没有活动录制',
  'Start': '开始',
  'Stop': '停止',
  'Close': '关闭',

  // Camera Settings
  'Background Effects': '背景效果',
  'None': '无',
  'Blur': '模糊',
  'Desk': '办公桌',
  'Nature': '自然',

  // Microphone Settings
  'Enable': '启用',
  'Disable': '禁用',
  'Enhanced Noise Cancellation': '增强降噪',

  // PreJoin and Connection
  'Try LiveKit Meet for free with our live demo project.': '免费试用我们的 LiveKit Meet 演示项目。',
  'Start Meeting': '开始会议',
  'Enable end-to-end encryption': '启用端到端加密',
  'Passphrase': '密码',
  'Connect LiveKit Meet with a custom server using LiveKit Cloud or LiveKit Server.': '使用 LiveKit Cloud 或 LiveKit Server 连接自定义服务器。',
  'Connect': '连接',
  'Demo': '演示',
  'Custom': '自定义',

  // Error messages
  "You're trying to join an encrypted meeting, but your browser does not support it. Please update it to the latest version and try again.": '您正在尝试加入加密会议，但您的浏览器不支持。请更新到最新版本后重试。',
  'Encountered an unexpected error, check the console logs for details': '遇到意外错误，请查看控制台日志了解详情',
  'Encountered an unexpected encryption error, check the console logs for details': '遇到意外加密错误，请查看控制台日志了解详情',

  // Home page
  '进入弹唱教学': '进入弹唱教学',
  '加载中': '加载中',
} as const;

export type TranslationKey = keyof typeof translations;

// Simple translation function
export function t(key: string): string {
  return translations[key as TranslationKey] || key;
}
