// مكتبة لإعداد التكامل مع أنظمة خارجية
export const sendEmail = async (to, subject, body) => {
  // محاكاة إرسال بريد إلكتروني (سيتم استبداله بـ API حقيقي مثل SendGrid)
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, message: `بريد إلكتروني إلى ${to} بموضوع ${subject}` }), 1000);
  });
};

export const shareOnSocial = async (platform, content) => {
  // محاكاة مشاركة على وسائل التواصل (سيتم استبداله بـ API مثل Twitter)
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, message: `تم المشاركة على ${platform}: ${content}` }), 1000);
  });
};