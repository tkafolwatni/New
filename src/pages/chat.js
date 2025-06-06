import styles from '../styles/global.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatRoom from '../components/ChatRoom';
import { useState } from 'react';

export default function Chat() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // تحديد ما إذا كان المستخدم مشرفًا

  // محاكاة إنشاء غرفة (متاحة للمشرف فقط)
  const handleCreateRoom = () => {
    if (isAdmin) {
      const newRoom = `Room_${rooms.length + 1}`;
      setRooms([...rooms, newRoom]);
    } else {
      alert('فقط المشرفون يمكنهم إنشاء غرف!');
    }
  };

  // محاكاة إزالة غرفة (متاحة للمشرف فقط)
  const handleDeleteRoom = (room) => {
    if (isAdmin) {
      setRooms(rooms.filter(r => r !== room));
      if (selectedRoom === room) setSelectedRoom(null);
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.chatContainer}>
        <h1>غرف الدردشة</h1>
        <div className={styles.roomList}>
          <button onClick={handleCreateRoom} disabled={!isAdmin}>
            إنشاء غرفة جديدة
          </button>
          {rooms.map((room) => (
            <div key={room} className={styles.roomItem}>
              <span onClick={() => setSelectedRoom(room)}>{room}</span>
              {isAdmin && (
                <button onClick={() => handleDeleteRoom(room)}>حذف</button>
              )}
            </div>
          ))}
        </div>
        {selectedRoom && (
          <ChatRoom roomName={selectedRoom} isAdmin={isAdmin} />
        )}
      </main>
      <Footer />
    </div>
  );
}