// 服饰搭配生成功能配置文件

// API配置
const API_CONFIG = {
    API_KEY: 'YOUR_API_KEY_HERE',
    API_ENDPOINT: 'https://ark.cn-beijing.volces.com/api/v3/images/generations',
    MODEL: 'doubao-seedream-4-5-251128'
};

// 提示词配置
const PROMPT_CONFIG = {
    BASE_PROMPT: '结合我上传的服装进行整体搭配，请优先保证模特全身完整展示，而非特写或半身构图，并生成时尚杂志风格的效果图。注意生成图片里不要水印。',
    PLACEHOLDER: '例如：多巴胺、浅春系穿搭、新中式、复古工装'
};

// 图片生成配置
const IMAGE_CONFIG = {
    SIZE: '2K',
    RESPONSE_FORMAT: 'url',
    STREAM: false,
    WATERMARK: false,
    SEQUENTIAL_IMAGE_GENERATION: 'disabled'
};

// 上传图片压缩配置
const UPLOAD_CONFIG = {
    MAX_WIDTH: 1024,      // 图片最大宽度
    MAX_HEIGHT: 1024,     // 图片最大高度
    QUALITY: 0.8,         // JPEG 压缩质量 (0-1)
    FORMAT: 'image/jpeg'  // 转换格式
};

// 常用标签配置
const TAGS_CONFIG = [
    '多巴胺',
    '浅春系穿搭',
    '新中式',
    '复古工装',
    '维多利亚优雅',
    '波西米亚度假',
    '慵懒松弛',
    '低调老钱',
    '巴洛克复古',
    '洛可可甜奢',
    '韩风复古',
    '英伦学院'
];

// UI配置
const UI_CONFIG = {
    TITLE: '✨ 服饰搭配生成',
    DESCRIPTION: '上传服装图片，输入目标穿搭场景，生成时尚杂志风格的效果图',
    UPLOAD_TIP: '💡 提示：请上传清晰的服装图片，输入详细的风格描述，生成效果更佳。',
    AUTO_PROMPT_TIP: '💡 提示：系统会自动添加"结合我上传的服装进行整体搭配，并生成时尚杂志风格的效果图。注意生成图片里不要水印"作为基础提示词',
    LOADING_TEXT: '正在生成效果图，请稍候...',
    GENERATE_BTN_TEXT: '生成效果图',
    GENERATING_BTN_TEXT: '生成中...',
    CLEAR_BTN_TEXT: '清空',
    CAMERA_BTN_TEXT: '拍照上传',
    GALLERY_BTN_TEXT: '相册选择',
    CAPTURE_BTN_TEXT: '📸 拍照',
    CANCEL_BTN_TEXT: '✕ 取消',
    RESULT_TITLE: '生成结果',
    PREVIEW_LABEL: '图片预览'
};

// 错误消息配置
const ERROR_MESSAGES = {
    NO_IMAGE: '请先上传服装图片（拍照或相册选择）',
    NO_DESCRIPTION: '请输入目标穿搭场景、风格、偏好元素',
    CAMERA_ERROR: '无法访问摄像头，请检查权限设置或使用相册选择',
    GENERATION_FAILED: '生成失败，请稍后重试。错误信息：',
    NO_IMAGE_URL: 'API未返回图片URL'
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        API_CONFIG,
        PROMPT_CONFIG,
        IMAGE_CONFIG,
        UPLOAD_CONFIG,
        TAGS_CONFIG,
        UI_CONFIG,
        ERROR_MESSAGES
    };
}