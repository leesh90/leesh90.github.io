---
layout: page
icon: fas fa-folder-open
order: 2
---

<style>
.project-container {
    display: grid;
    grid-template-columns: 1fr; /* 한 줄에 하나의 프로젝트 */
    gap: 20px;
    margin-bottom: 30px;
}

.project-card {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: var(--card-bg);
    display: flex;
    flex-direction: row; /* 가로 정렬 */
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.project-image-container {
    width: 250px; /* 이미지 컨테이너 너비 고정 */
    /* height: 150px; */ /* 고정 높이 제거 */
    overflow: hidden;
    flex-shrink: 0; /* 컨테이너 크기 유지 */
}

.project-image {
    width: 100%;
    height: auto; /* 이미지 비율에 맞게 높이 자동 조정 */
    object-fit: cover; /* cover 유지, height:auto와 함께 사용시 문제 없음 */
    transition: transform 0.3s ease;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.project-info {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-title {
    font-size: 1.5rem;
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--link-color);
}

.project-description {
    color: var(--text-color);
    margin: 0 0 15px 0;
    font-size: 1rem;
    flex-grow: 1;
}

.project-tags {
    margin-top: auto;
    padding-top: 10px;
}

.project-tag {
    display: inline-block;
    background: var(--tag-bg);
    padding: 4px 12px;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 15px;
    font-size: 0.85rem;
    color: var(--tag-color);
    font-weight: 500;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>

<div class="project-container">
  {% assign sorted_projects = site.projects | sort: "start_date" | reverse %}
  {% for project in sorted_projects %}
    <div class="project-card">
      <div class="project-info">
        <h3 class="project-title">
          {{ project.title }}
        </h3>
        <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 10px;">
          {% if project.start_date %}
            {{ project.start_date | date: "%Y-%m-%d" }} ~ {{ project.end_date | date: "%Y-%m-%d" }}
          {% else %}
            {{ project.date | date: "%B %d, %Y" }}
          {% endif %}
        </p>

        {% if project.buttons %}
        <div style="text-align: center; margin-bottom: 10px;">
          {% for button in project.buttons %}
          <button class="btn btn-primary" onclick="toggleProjectImage('{{ project.title | slugify }}-{{ forloop.index }}')">{{ button.text }}</button>
          {% endfor %}
        </div>
        {% for button in project.buttons %}
        <div id="image-{{ project.title | slugify }}-{{ forloop.index }}" style="display: none; text-align: center; margin-bottom: 10px;">
          <img src="{{ button.image }}" alt="{{ button.text }}" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
        {% endfor %}
        {% endif %}

        <p class="project-description">
          {{ project.description }}
        </p>
        {% if project.tags.size > 0 %}
        <div class="project-tags">
          {% for tag in project.tags %}
            <span class="project-tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<script>
  function toggleProjectImage(projectId) {
    var imageContainer = document.getElementById('image-' + projectId);
    if (imageContainer.style.display === 'none') {
      imageContainer.style.display = 'block';
    } else {
      imageContainer.style.display = 'none';
    }
  }
</script>
