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

