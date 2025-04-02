---
layout: page
icon: fas fa-book
order: 3
---

<!-- markdownlint-disable MD033 MD041 -->

<style>
.section-title {
    font-size: 1.8rem;
    margin: 30px 0 20px 0;
    color: var(--heading-color);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
}

.publication-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.publication-card {
    display: flex;
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    background-color: var(--card-bg);
}

.publication-card:hover {
    transform: translateY(-5px);
}

.publication-image {
    width: 200px;
    min-width: 200px;
    height: 150px;
    object-fit: cover;
}

.publication-info {
    padding: 15px;
    flex-grow: 1;
}

.publication-title {
    font-size: 1.2rem;
    margin: 0 0 10px 0;
    color: var(--link-color);
}

.publication-authors {
    color: var(--text-color);
    margin: 0 0 8px 0;
    font-size: 0.9rem;
    font-style: italic;
}

.publication-venue {
    color: var(--text-color);
    margin: 0 0 8px 0;
    font-size: 0.9rem;
    font-weight: bold;
}

.publication-description {
    color: var(--text-color);
    margin: 0;
    font-size: 0.9rem;
}

.publication-tags {
    margin-top: 10px;
    font-size: 0.8rem;
}

.publication-tag {
    display: inline-block;
    background: var(--tag-bg);
    padding: 2px 8px;
    margin-right: 5px;
    border-radius: 4px;
    color: var(--tag-color);
}
</style>

<!-- Conference Section -->
<h2 class="section-title">Conference</h2>
<div class="publication-container">
<!-- Traffic Classification Paper -->
    <a href="/papers/Traffic_Classification_using_Deep_Learning.pdf" class="publication-card">
    <!-- <img src="/assets/img/publications/traffic_classification.jpg" alt="Traffic Classification Paper" class="publication-image"> -->
    <div class="publication-info">
      <h3 class="publication-title">Traffic Classification using Deep Learning: High Accuracy is Not Enough</h3>
      <p class="publication-authors">Kanghee Lee, Seunghun Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">ACM SIGCOMM 2020 (Poster)</p>
      <p class="publication-description">
        Deep learning approach for network traffic classification with focus on practical applicability and performance metrics beyond accuracy.
      </p>
      <div class="publication-tags">
        <span class="publication-tag">Deep Learning</span>
        <span class="publication-tag">Network Traffic</span>
        <span class="publication-tag">Classification</span>
      </div>
    </div>
  </a>

  <!-- Crowdfunding Success Prediction Paper -->
  <a href="/papers/Content-based_Success_Prediction_of_Crowdfunding.pdf" class="publication-card">
    <!-- <img src="/assets/img/publications/crowdfunding_prediction.jpg" alt="Crowdfunding Prediction Paper" class="publication-image"> -->
    <div class="publication-info">
      <h3 class="publication-title">Content-based Success Prediction of Crowdfunding Campaigns: A Deep Learning Approach</h3>
      <p class="publication-authors">Seunghun Lee, Kanghee Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">ACM CSCW 2018 (Poster)</p>
      <p class="publication-description">
        Novel deep learning methodology for predicting crowdfunding campaign success using content-based features.
      </p>
      <div class="publication-tags">
        <span class="publication-tag">Deep Learning</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Prediction</span>
      </div>
    </div>
  </a>
</div>

<!-- Journal Section -->
<h2 class="section-title">Journal</h2>
<div class="publication-container">
  <!-- Fraud Detection Paper -->
  <a href="/papers/Fraud_Detection_IEEEAccess.pdf" class="publication-card">
    <img src="/assets/img/publications/fraud_detection.jpg" alt="Fraud Detection Paper" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">Fraud Detection on Crowdfunding Platforms using Multiple Feature Selection Methods</h3>
      <p class="publication-authors">Seung-hun Lee, Heemin Park, and Hyun-chul Kim</p>
      <p class="publication-venue">IEEE Access, March 2025</p>
      <p class="publication-description">
        Comprehensive study on fraud detection in crowdfunding platforms using various feature selection methods and machine learning techniques.
      </p>
      <div class="publication-tags">
        <span class="publication-tag">Fraud Detection</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Feature Selection</span>
      </div>
    </div>
  </a>
</div>
