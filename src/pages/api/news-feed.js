export default function handler(req, res) {
  // محاكاة جلب الأخبار من مصادر موثوقة (مثل RSS feed أو API خارجي)
  const news = [
    { title: 'خبر سياسي 1', summary: 'تفاصيل وتحليل الخبر السياسي الأول.' },
    { title: 'خبر سياسي 2', summary: 'تفاصيل وتحليل الخبر السياسي الثاني.' },
  ];

  res.status(200).json(news);
}