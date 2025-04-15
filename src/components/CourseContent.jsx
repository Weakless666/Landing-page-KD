import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/CourseContent.css';

const CourseContent = () => {
  const { t } = useLanguage();

  return (
    <div className="course-content">
      <div className="container">
        {/* Slide 1 */}
        <section className="content-section">
          <div className="section-content">
            <div className="eyebrow-options">
              <span className="eyebrow-text">{t('specialForYou')}</span>
            </div>
            <div className="main-content">
              <h2>{t('learnCreateContent')}</h2>
              <p className="description">{t('joinSystem')}</p>
              <div className="features">
                <div className="feature-item">{t('creatorMindset')}</div>
                <div className="feature-item">{t('workWithSoftware')}</div>
                <div className="feature-item">{t('buildBrand')}</div>
                <div className="feature-item">{t('readyTemplates')}</div>
                <div className="feature-item">{t('joinActiveComm')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2 */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('storyBehindReel')}</h2>
            <p className="description">{t('personalJourney')}</p>
            <p className="description">{t('resultOfEffort')}</p>
            <p className="description">{t('noEasyPromise')}</p>
          </div>
        </section>

        {/* Bonuses */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('bonusTitle')}</h2>
            <div className="bonuses">
              <div className="bonus-item">
                <h3>{t('bonus1Title')}</h3>
                <p>{t('bonus1Description')}</p>
              </div>
              <div className="bonus-item">
                <h3>{t('bonus2Title')}</h3>
                <p>{t('bonus2Description')}</p>
              </div>
              <div className="bonus-item">
                <h3>{t('bonus3Title')}</h3>
                <p>{t('bonus3Description')}</p>
              </div>
              <div className="bonus-item">
                <h3>{t('bonus4Title')}</h3>
              </div>
              <div className="bonus-item">
                <h3>{t('bonus5Title')}</h3>
              </div>
              <div className="bonus-item">
                <h3>{t('bonus6Title')}</h3>
                <p>{t('bonus6Description')}</p>
              </div>
              <div className="bonus-item">
                <h3>{t('bonus7Title')}</h3>
                <p>{t('bonus7Description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('whatWeDoTitle')}</h2>
            <p className="description">{t('painPoint1')}</p>
            <p className="description">{t('painPoint2')}</p>
            <p className="description">{t('systemBenefits')}</p>
          </div>
        </section>

        {/* What You Learn */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('whatYouLearnTitle')}</h2>
            <p className="description">{t('modulesIntro')}</p>
            
            <div className="modules">
              <div className="module">
                <h3>{t('module1Title')}</h3>
                <p>{t('module1Goal')}</p>
                <p>{t('module1Features')}</p>
              </div>
              
              <div className="module">
                <h3>{t('module2Title')}</h3>
                <p>{t('module2Goal')}</p>
                <p>{t('module2Features')}</p>
              </div>
              
              <div className="module">
                <h3>{t('module3Title')}</h3>
                <p>{t('module3Goal')}</p>
                <p>{t('module3Features')}</p>
              </div>
              
              <div className="module">
                <h3>{t('module4Title')}</h3>
                <p>{t('module4Goal')}</p>
                <p>{t('module4Features')}</p>
              </div>
              
              <div className="module">
                <h3>{t('module5Title')}</h3>
                <p>{t('module5Goal')}</p>
                <p>{t('module5Features')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before You Decide */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('beforeYouDecideTitle')}</h2>
            <h3>{t('commonQuestionsTitle')}</h3>
            
            <div className="myths">
              <div className="myth">
                <h4>{t('myth1')}</h4>
                <p>{t('truth1')}</p>
              </div>
              <div className="myth">
                <h4>{t('myth2')}</h4>
                <p>{t('truth2')}</p>
              </div>
              <div className="myth">
                <h4>{t('myth3')}</h4>
                <p>{t('truth3')}</p>
              </div>
              <div className="myth">
                <h4>{t('myth4')}</h4>
                <p>{t('truth4')}</p>
              </div>
              <div className="myth">
                <h4>{t('myth5')}</h4>
                <p>{t('truth5')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('resourcesTitle')}</h2>
            <div className="main-resource">
              <h3>{t('mainResourceTitle')}</h3>
              <p>{t('mainResourceDescription')}</p>
            </div>
            
            <div className="resources">
              <div className="resource">
                <span className="emoji">{t('resource1Emoji')}</span>
                <h4>{t('resource1Title')}</h4>
                <p>{t('resource1Description')}</p>
              </div>
              <div className="resource">
                <span className="emoji">{t('resource2Emoji')}</span>
                <h4>{t('resource2Title')}</h4>
                <p>{t('resource2Description')}</p>
              </div>
              <div className="resource">
                <span className="emoji">{t('resource3Emoji')}</span>
                <h4>{t('resource3Title')}</h4>
                <p>{t('resource3Description')}</p>
              </div>
              <div className="resource">
                <span className="emoji">{t('resource4Emoji')}</span>
                <h4>{t('resource4Title')}</h4>
                <p>{t('resource4Description')}</p>
              </div>
              <div className="resource">
                <span className="emoji">{t('resource5Emoji')}</span>
                <h4>{t('resource5Title')}</h4>
                <p>{t('resource5Description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('specialOfferTitle')}</h2>
            <div className="offer">
              <p className="original-price">{t('originalPrice')}</p>
              <p className="special-price">{t('specialPrice')}</p>
              <div className="guarantee">
                <p>{t('guarantee')}</p>
                <p>{t('guaranteeText')}</p>
              </div>
              <div className="offer-features">
                <p>{t('offerFeature1')}</p>
                <p>{t('offerFeature2')}</p>
                <p>{t('offerFeature3')}</p>
              </div>
              <button className="start-button">{t('startNow')}</button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('testimonialsTitle')}</h2>
            <div className="testimonials">
              <div className="testimonial">
                <h3>{t('testimonial1Name')}</h3>
                <p className="date">{t('testimonial1Date')}</p>
                <p className="purchase-time">{t('testimonial1PurchaseTime')}</p>
                <p className="text">{t('testimonial1Text')}</p>
              </div>
              <div className="testimonial">
                <h3>{t('testimonial2Name')}</h3>
                <p className="date">{t('testimonial2Date')}</p>
                <p className="purchase-time">{t('testimonial2PurchaseTime')}</p>
                <p className="text">{t('testimonial2Text')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="content-section">
          <div className="section-content">
            <h2>{t('futureTitle')}</h2>
            <p className="description">{t('futureSubtitle')}</p>
            <div className="benefits">
              <p>{t('benefitsList')}</p>
            </div>
            <div className="limitations">
              <p>{t('limitationsList')}</p>
            </div>
            <p className="closing">{t('closingText')}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseContent; 