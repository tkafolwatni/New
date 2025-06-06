import styles from '../styles/global.module.css';
import { useState } from 'react';

export default function ChatRoom({ roomName, isAdmin }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [pollQuestion, setPollQuestion] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [reminder, setReminder] = useState('');

  // إرسال رسالة جديدة
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, timestamp: new Date().toLocaleTimeString() }]);
      setNewMessage('');
    }
  };

  // إنشاء استطلاع (متاح للمشرف فقط)
  const handleCreatePoll = (e) => {
    e.preventDefault();
    if (isAdmin && pollQuestion.trim() && pollOptions.every(opt => opt.trim())) {
      alert(`تم إنشاء استطلاع: ${pollQuestion} مع الخيارات: ${pollOptions.join(', ')}`);
      setPollQuestion('');
      setPollOptions(['', '']);
    } else if (!isAdmin) {
      alert('فقط المشرفون يمكنهم إنشاء استطلاعات!');
    }
  };

  // إضافة تذكير (متاح للمشرف فقط)
  const handleSetReminder = (e) => {
    e.preventDefault();
    if (isAdmin && reminder.trim()) {
      alert(`تم تعيين تذكير: ${reminder}`);
      setReminder('');
    } else if (!isAdmin) {
      alert('فقط المشرفون يمكنهم تعيين تذكيرات!');
    }
  };

  return (
    <div className={styles.chatRoom}>
      <h2>غرفة: {roomName}</h2>
      <div className={styles.messageList}>
        {messages.map((msg, idx) => (
          <div key={idx} className={styles.messageItem}>
            <span>{msg.text}</span>
            <span>{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className={styles.messageForm}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="اكتب رسالة..."
        />
        <button type="submit">إرسال</button>
      </form>

      {isAdmin && (
        <>
          <form onSubmit={handleCreatePoll} className={styles.pollForm}>
            <h3>إنشاء استطلاع</h3>
            <input
              type="text"
              value={pollQuestion}
              onChange={(e) => setPollQuestion(e.target.value)}
              placeholder="سؤال الاستطلاع"
            />
            {pollOptions.map((option, idx) => (
              <input
                key={idx}
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...pollOptions];
                  newOptions[idx] = e.target.value;
                  setPollOptions(newOptions);
                }}
                placeholder={`الخيار ${idx + 1}`}
              />
            ))}
            <button type="submit">إنشاء الاستطلاع</button>
          </form>

          <form onSubmit={handleSetReminder} className={styles.reminderForm}>
            <h3>إضافة تذكير</h3>
            <input
              type="text"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              placeholder="نص التذكير"
            />
            <button type="submit">تعيين التذكير</button>
          </form>
        </>
      )}
    </div>
  );
}