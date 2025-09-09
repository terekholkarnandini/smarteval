import "./StudentPage.css";

export default function StudentPage({ student }) {
  const { studentName, studentId } = student || {};

  return (
    <div className="student-dashboard">
      <div className="sidebar">
        <ul className="sidebar-nav">
        <li><span>Profile</span></li>
  <li><span>Analysis</span></li>
  <li><span>Attempt Quiz</span></li>
  <li><span>Resources</span></li>
  
        </ul>
      </div>

      <main className="main-content">
        <h1>Welcome Student !</h1>
        <p>Overall Progress</p>
      </main>
      <div className="chatbot">
    </div>
    </div>
    
  );
}
