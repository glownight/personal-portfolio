import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Fireworks from "./components/Fireworks";
import TypeWriter from "./components/TypeWriter";

function App() {
  const location = useLocation();
  const [fireworksOn, setFireworksOn] = useState(false);
  const musicTracks = [
    { title: "Html", plays: "熟悉", comments: "0" },
    { title: "Css", plays: "熟悉", comments: "0" },
    { title: "Javascript", plays: "熟悉", comments: "0" },
    { title: "Typescript", plays: "熟悉", comments: "0" },
    { title: "React", plays: "熟悉", comments: "0" },
    { title: "Vue", plays: "熟悉", comments: "0" },
    { title: "Node", plays: "熟悉", comments: "0" },
    { title: "Taro", plays: "熟悉", comments: "0" },
    { title: "小程序", plays: "熟悉", comments: "0" },
    { title: "C++", plays: "熟悉", comments: "0" },
  ];

  // const shortTracks = [
  //   { title: "Ain't I Lost Control", plays: "48570", comments: "0" },
  //   { title: "仰世而来（Demo）", plays: "32145", comments: "0" },
  // ];

  const projects = [
    {
      name: "classroom",
      desc: "使用Threejs开发的3D项目",
      tech: ["Threejs"],
      demo: "threejs-classroom-266txrkus-glownights-projects.vercel.app",
      github: "https://github.com/glownight/threejs-classroom",
    },
    {
      name: "tools",
      desc: "一个基于React的工具库",
      tech: ["React", "Js"],
      demo: "tools-web-react-a6fox340c-glownights-projects.vercel.app",
      github: "https://github.com/glownight/tools-web-react",
    },
  ];

  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <div className="app">
      {/* Page header maroon area */}
      <header className="page-header">
        <div className="container header-inner">
          <div className="header-left">
            <h1 className="site-title">
              <TypeWriter text="Hi，欢迎来到我的主页~" />
            </h1>
            <div className="subnav">
              <Link className={isHome ? "active" : ""} to="/">
                主页
              </Link>
              <Link className={!isHome ? "active" : ""} to="/projects">
                项目集
              </Link>
            </div>
          </div>
          <div className="header-right">
            <div className="header-avatar">{/* 头像位 */}</div>
            {/* 可爱开关按钮 */}
            <button
              className={`kawaii-toggle ${fireworksOn ? "on" : "off"}`}
              onClick={() => setFireworksOn((v) => !v)}
              aria-pressed={fireworksOn}
              title={fireworksOn ? "关闭烟花" : "打开烟花"}
            >
              <span className="spark">✦</span>
              <span className="face" aria-hidden>
                {fireworksOn ? "(｡•́︿•̀｡)" : "(≧▽≦)"}
              </span>
              <span className="label">
                {fireworksOn ? "点击我关闭烟花" : "点击我开启烟花"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Two columns: left main, right sidebar */}
      <div className="container columns">
        {/* Left main */}
        <main className="main-left">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* 公告板（主页） */}
                  <section className="card notice-card">
                    <section className="card profile-card">
                      <div className="profile-header">
                        <h3 className="profile-name">sl</h3>
                        <p className="profile-subtitle">前端工程师</p>
                      </div>
                    </section>
                  </section>

                  {/* 个人优势（主页内容） */}
                  <section className="card music-card">
                    <div className="section-header">
                      <h2>「个人优势」</h2>
                    </div>
                    <div className="music-table">
                      <div className="table-header">
                        <span className="col-title">技能</span>
                        <span className="col-plays">掌握程度</span>
                      </div>
                      {musicTracks.map((track, i) => (
                        <div key={i} className="track-row">
                          <div className="track-info">
                            <span className="dot" />
                            <span className="track-title">{track.title}</span>
                          </div>
                          <span className="track-plays">{track.plays}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              }
            />

            <Route
              path="/projects"
              element={
                <>
                  {/* 资料卡（与主页一致） */}
                  <section className="card notice-card">
                    <section className="card profile-card">
                      <div className="profile-header">
                        <h3 className="profile-name">sl</h3>
                        <p className="profile-subtitle">前端工程师</p>
                      </div>
                    </section>
                  </section>

                  {/* 项目列表（项目集路由） */}
                  <section className="card project-card">
                    <div className="section-header">
                      <h2>「项目」</h2>
                    </div>
                    <div className="project-list">
                      {projects.map((p, i) => (
                        <div key={i} className="project-item">
                          <div className="project-main">
                            <a
                              className="project-title"
                              href={p.demo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {p.name}
                            </a>
                            <p className="project-desc">{p.desc}</p>
                            <div className="project-tags">
                              {p.tech.map((t, idx) => (
                                <span className="tag" key={idx}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="project-actions">
                            <a
                              className="link-btn"
                              href={p.demo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              预览
                            </a>
                            {/* <a
                              className="link-btn"
                              href={p.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub
                            </a> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              }
            />

            {/* 兼容 /home 与未知路由 */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <Fireworks enabled={fireworksOn} />
    </div>
  );
}

export default App;
