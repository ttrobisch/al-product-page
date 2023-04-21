import React from "react";
import { Headline } from "../components/Headline";

const classes = {
  label: "lg:col-start-1 lg:w-32 block text-sm font-medium text-gray-500",
  input:
    "px-3 py-2 w-full text-neutral-800 border border-gray-300 rounded shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none",
  textarea:
    "px-3 py-2 w-full text-neutral-800 border border-gray-300 rounded shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none outline-none",
  inputContainer: "lg:col-start-2 -mx-3",
  button:
    "w-full lg:col-start-2 place-self-end py-2 px-4 border border-transparent rounded shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50",
};

function ContactPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = `Name: ${data.get("name")}
Email: ${data.get("email")}
Message: ${data.get("message")}`;

    window.location.href =
      "mailto:al@t-systems.net?subject=Contact&body=" +
      encodeURIComponent(body);
  }

  return (
    <div className={"max-w-7xl box-content mx-auto py-8 px-[5vw]"}>
      <Headline>Contact</Headline>

      <form
        className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-y-6 lg:items-center gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className={classes.label}>
          Name
        </label>
        <div className={classes.inputContainer}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            className={classes.input}
          />
        </div>

        <label htmlFor="email" className={classes.label}>
          Email <sup>*</sup>
        </label>
        <div className={classes.inputContainer}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
            className={classes.input}
          />
        </div>

        <label htmlFor="message" className={classes.label + " sr-only"}>
          Message <sup>*</sup>
        </label>
        <div className={classes.inputContainer}>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your Message"
            required
            rows={10}
            className={classes.textarea}
          />
        </div>

        <div className="-mx-3">
          <button type="submit" className={classes.button}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
