import React from 'react';
import styles from './styles.module.css';

const TeamsInterface = () => {
  const [activeChannel, setActiveChannel] = useState('general');

  const channels = [
    'general',
    'test',
    'performance',
    'tuesday_class',
  ];

  return (
      <div className={styles.teamsContainer}>
        <aside className={styles.sidebar}>
          <header className={styles.pinnedHeader}>
            <h3>Pinned</h3>
            <div className={styles.pinnedGroup}>
              <button className={styles.groupButton} onClick={() => setActiveChannel('general')}>hust_itssinjapanese1-k66</button>
            </div>
          </header>
          <div className={styles.channelList}>
            <h4>Channels</h4>
            {channels.map(channel => (
                <button
                    key={channel}
                    className={
                      `${styles.channelButton} ${channel === activeChannel ? styles.activeChannel : ''}`
                    }
                    onClick={() => setActiveChannel(channel)}
                >
                  {channel}
                </button>
            ))}
          </div>
        </aside>
        <main className={styles.mainContent}>
          <header className={styles.chatHeader}>
            <h2>{activeChannel === 'general' ? 'General' : activeChannel}</h2>
          </header>
          <div className={styles.chatMessages}>
            <div className={styles.message}>
              <div className={styles.senderInfo}>
                <span className={styles.senderName}>Ryo Kimura</span>
                <span className={styles.timestamp}>10:20 AM</span>
              </div>
              <p className={styles.messageText}>こんにちは、全員が準備は完了ですか？また、今週末の日本語練習会について話し合っています。</p>
            </div>
            <div className={styles.message}>
              <div className={styles.senderInfo}>
                <span className={styles.senderName}>Le Phuc</span>
                <span className={styles.timestamp}>10:21 AM</span>
              </div>
              <p className={styles.messageText}>先輩、よろしくお願いします。昨日、文書の資料を作成しておきました。</p>
              <div className={styles.attachment}>
                <a href="/files/JulyPromotion.docx">JulyPromotion.docx</a>
              </div>
            </div>
          </div>
          <div className={styles.messageInputContainer}>
            <input type="text" className={styles.messageInput} placeholder="Type a new message..." />
            <button className={styles.sendButton}>Send</button>
          </div>
        </main>
      </div>
  );
};

export default TeamsInterface;

// Example styles.module.css file
/*
.teamsContainer {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.pinnedHeader {
  margin-bottom: 20px;
}

.groupButton {
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  padding: 10px;
  cursor: pointer;
}

.channelButton {
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  margin: 5px 0;
}

.activeChannel {
  background: #d0d0d0;
}

.mainContent {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
}

.chatHeader {
  padding: 20px;
  background: #eee;
}

.chatMessages {
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
}

.message {
  margin-bottom: 20px;
}

.senderInfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #555;
}

.messageText {
  font-size: 1rem;
}

.attachment {
  margin-top: 10px;
}

.messageInputContainer {
  padding: 20px;
  display: flex;
  border-top: 1px solid #ddd;
}

.messageInput {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.sendButton {
  margin-left: 10px;
  padding: 10px;
  background: #0078d4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
*/
