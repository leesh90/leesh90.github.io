---
layout: page
icon: fas fa-folder-open
order: 2
---

<style>
.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.project-card {
    display: flex;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    background-color: var(--card-bg);
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-image {
    width: 200px;
    min-width: 200px;
    height: 150px;
    object-fit: cover;
}

.project-info {
    padding: 15px;
    flex-grow: 1;
}

.project-title {
    font-size: 1.2rem;
    margin: 0 0 10px 0;
    color: var(--link-color);
}

.project-description {
    color: var(--text-color);
    margin: 0;
    font-size: 0.9rem;
}

.project-tags {
    margin-top: 10px;
    font-size: 0.8rem;
}

.project-tag {
    display: inline-block;
    background: var(--tag-bg);
    padding: 2px 8px;
    margin-right: 5px;
    border-radius: 4px;
    color: var(--tag-color);
}
</style>

<div class="project-container">
  <!-- 프로젝트 1 -->
  <a href="/projects/project1" class="project-card">
    <img src="/assets/img/projects/project1.jpg" alt="Project 1" class="project-image">
    <div class="project-info">
      <h3 class="project-title">프로젝트 제목 1</h3>
      <p class="project-description">
        프로젝트에 대한 간단한 설명을 여기에 작성합니다.
        핵심 내용을 2-3줄로 요약하면 좋습니다.
      </p>
      <div class="project-tags">
        <span class="project-tag">Python</span>
        <span class="project-tag">Machine Learning</span>
      </div>
    </div>
  </a>

  <!-- 프로젝트 2 -->
  <a href="/projects/project2" class="project-card">
    <img src="/assets/img/projects/project2.jpg" alt="Project 2" class="project-image">
    <div class="project-info">
      <h3 class="project-title">프로젝트 제목 2</h3>
      <p class="project-description">
        두 번째 프로젝트에 대한 설명입니다.
        주요 특징과 사용된 기술을 간단히 설명합니다.
      </p>
      <div class="project-tags">
        <span class="project-tag">JavaScript</span>
        <span class="project-tag">React</span>
      </div>
    </div>
  </a>
</div>