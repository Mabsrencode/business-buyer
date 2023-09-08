import "../dist/Form.css";
const Form = () => {
  return (
    <section className="form-section">
      <h1>
        WE WILL BE
        <br /> HAPPY TO HELP YOUR <span>BUSINESS</span>
      </h1>
      <form>
        <input type="text" placeholder="*Name" />
        <input type="email" name="" id="" placeholder="*Email" />
        <input type="tel" name="" id="" placeholder="*Phone" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="*Message"
        ></textarea>
        <button type="submit">Submit</button>
        <p>
          By clicking the "send" button I agree that my personal data will be
          process.
        </p>
      </form>
    </section>
  );
};

export default Form;
