import "../dist/Diff.css";

function Diff() {
  return (
    <section className="diff-section">
      <div className="title">
        <h5>Our Difference</h5>
      </div>
      <div className="diff-container">
        <div className="diff-content">
          <div className="diff-content-title">
            <h3>Competitors</h3>
            <span>/</span>
          </div>
          <div className="diff-content-description">
            <p>
              Legacy disappears Roles are consolidated. Management replaced
              Uncertainty for employees Risk of tyre kicking
            </p>
          </div>
        </div>
        <div className="diff-content">
          <div className="diff-content-title">
            <h3>Private Equity</h3>
            <span>/</span>
          </div>
          <div className="diff-content-description">
            <p>
              Long diligence process Management replaced Culture changes
              Complicated structures Short-term owners
            </p>
          </div>
        </div>
        <div className="diff-content">
          <div className="diff-content-title">
            <h3>Buzzer.capital</h3>
            <span>/</span>
          </div>
          <div className="diff-content-description">
            <p>
              Targeted due diligence Simple structures Preference to promote
              from within Long-term owners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diff;
