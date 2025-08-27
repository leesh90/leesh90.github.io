---
layout: page
icon: fas fa-stream
order: 6
---

<div id="social-feed" class="social-feed-container">
  <div class="feed-content" id="feed-content">
    {% assign feeds_sorted = site.feeds | sort: 'date' | reverse %}
    {% for feed_item in feeds_sorted %}
      <article class="feed-item" data-date="{{ feed_item.date | date: '%Y%m%d' }}">
        {% if feed_item.my_comment %}
          <div class="my-comment">
            <div class="comment-header">
              <i class="fas fa-user-circle"></i>
              <span class="my-name">{{ site.social.name }}</span>
              <span class="comment-date">{{ feed_item.date | date: "%Y-%m-%d" }}</span>
            </div>
            <div class="comment-content">
              {{ feed_item.my_comment | markdownify }}
            </div>
          </div>
        {% endif %}
        
        {% if feed_item.embed_code %}
          <div class="social-embed">
            {{ feed_item.embed_code }}
          </div>
        {% endif %}
        
        {% if feed_item.twitter_url %}
          <div class="social-embed twitter-embed">
            <blockquote class="twitter-tweet">
              <a href="{{ feed_item.twitter_url }}">트윗 보기</a>
            </blockquote>
          </div>
        {% endif %}
        
        {% if feed_item.tags %}
          <div class="feed-tags">
            {% for tag in feed_item.tags %}
              <span class="feed-tag">#{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
  </div>

  <!-- Pagination -->
  <nav class="pagination-nav" id="pagination-nav">
    <ul class="pagination" id="pagination-controls">
    </ul>
  </nav>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const feedItems = document.querySelectorAll('.feed-item');
  const itemsPerPage = 5;
  const totalItems = feedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;
  
  function showPage(page) {
    // 모든 아이템 숨기기
    feedItems.forEach(item => item.style.display = 'none');
    
    // 현재 페이지 아이템들만 보이기
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    for (let i = start; i < end && i < totalItems; i++) {
      feedItems[i].style.display = 'block';
    }
    
    currentPage = page;
    updatePaginationControls();
  }
  
  function updatePaginationControls() {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';
    
    if (totalPages <= 1) {
      document.getElementById('pagination-nav').style.display = 'none';
      return;
    }
    
    // 이전 버튼
    if (currentPage > 1) {
      const prevLi = document.createElement('li');
      prevLi.className = 'page-item';
      const prevLink = document.createElement('a');
      prevLink.className = 'page-link';
      prevLink.href = '#';
      prevLink.innerHTML = '&laquo; Previous';
      prevLink.onclick = function(e) {
        e.preventDefault();
        showPage(currentPage - 1);
      };
      prevLi.appendChild(prevLink);
      paginationControls.appendChild(prevLi);
    }
    
    // 페이지 번호들
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.className = 'page-item';
      if (i === currentPage) {
        li.classList.add('active');
      }
      
      const link = document.createElement('a');
      link.className = 'page-link';
      link.href = '#';
      link.textContent = i;
      link.onclick = function(e) {
        e.preventDefault();
        showPage(i);
      };
      
      li.appendChild(link);
      paginationControls.appendChild(li);
    }
    
    // 다음 버튼
    if (currentPage < totalPages) {
      const nextLi = document.createElement('li');
      nextLi.className = 'page-item';
      const nextLink = document.createElement('a');
      nextLink.className = 'page-link';
      nextLink.href = '#';
      nextLink.innerHTML = 'Next &raquo;';
      nextLink.onclick = function(e) {
        e.preventDefault();
        showPage(currentPage + 1);
      };
      nextLi.appendChild(nextLink);
      paginationControls.appendChild(nextLi);
    }
  }
  
  // 초기 페이지 표시
  showPage(1);
});
</script>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>