export default function TechnologyPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Decision Systems & Technology</p>

        <h2>
          Technical Work
        </h2>

        <p>
          My technical work explores how software, machine learning, 
          and human judgment come together within real-world decision systems.
          I am building toward Machine Learning Engineering through Python Backend Engineering 
          and MLOps, with a developing focus on production ML systems that predict, recommend, rank, forecast, optimize, and support human decision-making.
        </p>
      </section>

    <section className="technology-direction">
        <p className="eyebrow">Areas of Focus</p>

        <p>
          <span>
                Python Backend Engineering
            <p>
                Building reliable APIs, databases, and software
                infrastructure for digital and machine-learning applications.
            </p>
            </span>
            <span>
                MLOps & ML Systems
            <p>
                Deploying, monitoring, maintaining, 
                and improving machine-learning systems in production.
            </p>
            </span>
            <span>
                Recommendation & Ranking Systems
            <p>
                Building systems that determine what actions, products, 
                information, or opportunities should be recommended or prioritized.
            </p>
            </span>
            <span>
                Forecasting & Optimization
            <p>
                Using models to anticipate future conditions 
                and determine better actions under business 
                and operational constraints.
            </p>
            </span>
            <span>
                Human-in-the-Loop Decision Systems
            <p>
                Exploring how human judgment, computational recommendations, 
                rules, and machine learning should interact in consequential decisions
            </p>
            </span>
        </p>

        <a href="/contact" className="button primary">
              Work with me →
        </a>
      </section>
    
    </main>
  );
}