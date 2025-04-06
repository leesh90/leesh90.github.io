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
    flex-direction: column;
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

.publication-info {
    padding: 15px;
}

.publication-title-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.publication-title {
    font-size: 1.2rem;
    margin: 0;
    color: var(--link-color);
}

.publication-button {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.paper-button {
    background-color: var(--link-color);
    color: white;
}

.doi-button {
    background-color: #0070f3;
    color: white;
}

.publication-button:hover {
    opacity: 0.9;
}

.publication-abstract {
    margin: 15px 0;
    padding: 10px;
    background-color: var(--card-bg);
    border-left: 3px solid var(--link-color);
    font-size: 0.9rem;
    color: var(--text-color);
}

.publication-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-top: 15px;
}

.publication-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
}

.publication-tag {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.publication-tag:nth-child(1) {
    background-color: #e3f2fd;
    color: #1976d2;
}

.publication-tag:nth-child(2) {
    background-color: #f3e5f5;
    color: #7b1fa2;
}

.publication-tag:nth-child(3) {
    background-color: #e8f5e9;
    color: #2e7d32;
}

.publication-tag:nth-child(4) {
    background-color: #fff3e0;
    color: #f57c00;
}

.publication-tag:nth-child(5) {
    background-color: #fce4ec;
    color: #c2185b;
}

.publication-tag:nth-child(6) {
    background-color: #e0f7fa;
    color: #0097a7;
}

.publication-tag:nth-child(7) {
    background-color: #f1f8e9;
    color: #689f38;
}

.publication-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>

<!-- Conference Section -->
<h2 class="section-title">Conference</h2>
<div class="publication-container">
  <!-- Traffic Classification Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Traffic Classification using Deep Learning: High Accuracy is Not Enough</h3>
        <a href="/papers/Traffic_Classification_using_Deep_Learning.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://dl.acm.org/doi/10.1145/3405837.3411369" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Kanghee Lee, Seunghun Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">ACM SIGCOMM, New York City, Aug. 2020.(Poster)</p>
      <div class="publication-abstract">
        As Deep Learning (DL) algorithms have rapidly become a methodology of choice in various domains, they have recently entered also the field of the Internet traffic classification, successfully demonstrating impressive results. Most of the research work up to this point has focused on improving the accuracy of classification systems, yet there has been little attempt to provide (i) systematic comparison of the various DL algorithms used and (ii) analysis on where the higher accuracy come from, particularly when comparing with the traditional machine learning algorithms like C4.5. To fill this gap, we conduct experiments with four DL algorithms proposed for traffic classification, including CNN, LSTM, Stacked Auto-Encoder (SAE), and Hierarchical Attention Networks (HAN). Further, we propose to leverage and visualize hierarchical attention layers to highlight which parts of the traffic packet traces were most informative for accurate classification, which provides hints about why (and how) DL algorithms achieve the state-of-the-art level high accuracy. We view this paper as the first step towards answering the aforementioned "why" question, which is critical in understanding the real benefit and contribution of deep learning to the field of the Internet traffic classification, and advancing its state-of-the-art.
      </div>
      <div class="publication-image-container">
        <img src="/assets/img/publications/Traffic_SIGCOMM.png" alt="Traffic Classification Paper" class="publication-image">
      </div>
      <div class="publication-tags">
        <span class="publication-tag">Deep Learning</span>
        <span class="publication-tag">Network Traffic</span>
        <span class="publication-tag">Traffic Classification</span>
        <span class="publication-tag">Explainable AI</span>
      </div>
    </div>
  </div>

  <!-- Crowdfunding Success Prediction Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Content-based Success Prediction of Crowdfunding Campaigns: A Deep Learning Approach</h3>
        <a href="/papers/Content-based_Success_Prediction_of_Crowdfunding.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://dl.acm.org/doi/10.1145/3272973.3274053" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Seunghun Lee, Kanghee Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">ACM CSCW, New York City's Hudson River (Jersey City), Nov. 2018.(Poster)</p>
      <div class="publication-tags">
        <span class="publication-tag">Deep Learning</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Success Prediction</span>
        <span class="publication-tag">Hierarchical Attention Networks</span>
      </div>
    </div>
  </div>

  <!-- Crowdfunding scam detection Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">The Language of Deceivers: Linguistic Features of Crowdfunding Scams</h3>
        <a href="/papers/The_Language_of_Deceivers.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://dl.acm.org/doi/10.1145/2872518.2889356" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Wafa Shafqat, Seunghun Lee, Sehrish Malik, and Hyun-chul Kim</p>
      <p class="publication-venue">International World Wide Web conference (WWW), Montreal, Canada, Apr. 2016.(Poster)</p>
      <div class="publication-tags">
        <span class="publication-tag">Linguistic Analysis</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Scam Detection</span>
      </div>
    </div>
  </div>

  <!-- SNS Map Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">SNS Map : Location-based SNS data mapping system</h3>
        <a href="/papers/SNSMap.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE06645952" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Seunghun Lee, Daeyoung Oh, Minhyuk Kang, and Hyun-chul kim</p>
      <p class="publication-venue">한국컴퓨터종합학술대회(In Proceedings of the Korea Computer Congress(KCC)), Jeju, Korea, June. 2015.</p>
      <div class="publication-tags">
        <span class="publication-tag">Mapping System</span>
        <span class="publication-tag">Twitter</span>
      </div>
    </div>
  </div>
</div>

<!-- Journal Section -->
<h2 class="section-title">Journal</h2>
<div class="publication-container">
  <!-- Fraud Detection IEEE Access Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Fraud Detection on Crowdfunding Platforms using Multiple Feature Selection Methods</h3>
        <a href="/papers/Fraud_Detection_IEEEAccess.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://doi.org/10.1109/ACCESS.2025.3547396" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Seung-hun Lee, Heemin Park, and Hyun-chul Kim</p>
      <p class="publication-venue">IEEE Access, March 2025</p>
      <div class="publication-tags">
        <span class="publication-tag">Fraud Detection</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Multiple Feature Selection</span>
        <span class="publication-tag">Linguistic Features</span>
      </div>
    </div>
  </div>

  <!-- Fraud Detection MDPI Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Backers Beware: Characteristics and Detection of Fraudulent Crowdfunding Campaigns</h3>
        <a href="/papers/Characteristics_and_Detection_of_Fraudulent_Crowdfunding_Campaigns.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://doi.org/10.3390/s22197677" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Seung-hun Lee, Wafa Shafqat, and Hyun-chul Kim</p>
      <p class="publication-venue">Journal of MDPI Sensors, Volume 22, Number 19, pp. 7677, Oct. 2022.</p>
      <div class="publication-tags">
        <span class="publication-tag">Fraud Detection</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Feature Selection</span>
        <span class="publication-tag">Logistic Regression</span>
        <span class="publication-tag">Linguistic Features</span>
      </div>
    </div>
  </div>

  <!-- Scam Detection Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Crowdfunding Scams : The Profiles and Language of Deceivers</h3>
        <a href="/papers/Crowdfunding_Scams.pdf" class="publication-button paper-button">Paper</a>
        <a href="#" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Seung-hun Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">Journal of The Korea Society of Computer and Information, Volume 23, Number 3, pp. 55-62, Mar. 2018.</p>
      <div class="publication-tags">
        <span class="publication-tag">Fraud Detection</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Machine Learning</span>
        <span class="publication-tag">Linguistic cues</span>
      </div>
    </div>
  </div>

  <!-- Success Prediction Paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Predicting Success of Crowdfunding Campaigns using Multimedia and Linguistic Features</h3>
        <a href="/papers/Predicting_Success_of_Crowdfunding_Campaigns.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://doi.org/10.9717/kmms.2018.21.2.281" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Kang-hee Lee, Seung-hun Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">Journal of Korea Multimedia Society, Volume 21, Number 2, pp. 281-288, Feb. 2018.</p>
      <div class="publication-tags">
        <span class="publication-tag">Success Prediction</span>
        <span class="publication-tag">Crowdfunding</span>
        <span class="publication-tag">Machine Learning</span>
        <span class="publication-tag">Linguistic Features</span>
        <span class="publication-tag">Multimedia Features</span>
      </div>
    </div>
  </div>

  <!-- Smart SNS Map paper -->
  <div class="publication-card">
    <div class="publication-info">
      <div class="publication-title-container">
        <h3 class="publication-title">Smart SNS Map: Location-based Social Network Service Data Mapping and Visualization System</h3>
        <a href="/papers/Predicting_Success_of_Crowdfunding_Campaigns.pdf" class="publication-button paper-button">Paper</a>
        <a href="https://doi.org/10.9717/kmms.2016.19.2.428" class="publication-button doi-button">DOI</a>
      </div>
      <p class="publication-authors">Jangho Yoon, Seung-hun Lee, and Hyun-chul Kim</p>
      <p class="publication-venue">Journal of Korea Multimedia Society, Volume 19, Number 2, pp. 428-435, Feb. 2016.</p>
      <div class="publication-tags">
        <span class="publication-tag">Social Network Data Mapping</span>
        <span class="publication-tag">Location-based Visualization</span>
        <span class="publication-tag">Sentiment Analysis</span>
        <span class="publication-tag">Twitter</span>
      </div>
    </div>
  </div>
</div>


