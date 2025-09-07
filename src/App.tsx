import './App.css'

interface Project {
  id: number
  title: string
  description: string
  url: string
  tech: string[]
}

function App() {
  const projects: Project[] = [
    {
      id: 1,
      title: "React Todo App",
      description: "一个功能完整的待办事项应用，支持增删改查、拖拽排序等功能",
      url: "https://your-todo-app.vercel.app",
      tech: ["React", "TypeScript", "CSS3"]
    },
    {
      id: 2,
      title: "Vue.js 博客系统",
      description: "基于Vue.js构建的个人博客系统，支持Markdown编辑和文章管理",
      url: "https://your-blog.vercel.app",
      tech: ["Vue.js", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "数据可视化大屏",
      description: "企业级数据可视化展示平台，实时数据监控和图表展示",
      url: "https://your-dashboard.vercel.app",
      tech: ["React", "D3.js", "WebSocket"]
    }
  ]

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
    "Python", "HTML5", "CSS3", "Git", "Docker"
  ]

  return (
    <div className="app">
      {/* 背景动画 */}
      <div className="background-animation"></div>
      
      {/* 个人信息区域 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="avatar-container">
            <div className="avatar">
              <span className="avatar-text">👨‍💻</span>
            </div>
          </div>
          <h1 className="name">张三</h1>
          <p className="title">全栈开发工程师</p>
          <p className="description">
            热爱编程，专注于前端技术栈开发，擅长React、Vue.js等现代框架，
            致力于创造优秀的用户体验和高质量的代码。
          </p>
          <div className="contact-links">
            <a href="mailto:your-email@example.com" className="contact-btn">
              📧 联系我
            </a>
            <a href="https://github.com/yourusername" className="contact-btn" target="_blank" rel="noopener noreferrer">
              🔗 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* 技能区域 */}
      <section className="skills-section">
        <h2 className="section-title">技能栈</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* 作品展示区域 */}
      <section className="projects-section">
        <h2 className="section-title">我的作品</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  🔗 访问
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <p>&copy; 2024 张三. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
