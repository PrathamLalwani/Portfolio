// type Props = {}
import { useReducer } from "react";
import { Element } from "react-scroll";

type FormInput = {
  email: string;
  name: string;
  message: string;
};

type FormInputAction = {
  type: string;
  payload: string;
};

const Contact = () => {
  const formInputReducer = (state: FormInput, action: FormInputAction) => {
    switch (action.type) {
      case "EMAIL":
        return { ...state, email: action.payload };
      case "NAME":
        return { ...state, name: action.payload };
      case "MESSAGE":
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };

  async function postData() {
    const apiName =
      "https://jdklw0egg4.execute-api.ca-central-1.amazonaws.com/prod";
    const path = "/contact-me";
    const myInit = {
      method: "POST",
      body: JSON.stringify(formInput), // replace this with attributes you need
      headers: {
        "Content-Type": "application/json",
      }, // OPTIONAL
    };

    return await fetch(apiName + path, { ...myInit })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // const [loading, setLoading] = useState(false);

  const [formInput, dispatch] = useReducer(formInputReducer, {
    email: "",
    name: "",
    message: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "EMAIL", payload: e.target.value });
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "NAME", payload: e.target.value });
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: "MESSAGE", payload: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    JSON.stringify(formInput);
    await postData();
    alert("Thank you for your message. I will get back to you soon!");
    dispatch({ type: "EMAIL", payload: "" });
    dispatch({ type: "NAME", payload: "" });
    dispatch({ type: "MESSAGE", payload: "" });
  };

  return (
    <Element name="Contact">
      <section className=" pb-10">
        <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-text">
          Contact Me
        </h2>
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <p className="mb-8 text-center text-text  sm:text-xl lg:mb-16">
            Keen to hear about new opportunities, discuss potential projects, or answer any questions you might have.
          </p>
          <form action="#" onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-text "
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className=":border-primary-500 :ring-primary-500 block w-full rounded-lg border border-primary-200 bg-background-100 p-3 text-sm text-text shadow-sm outline-none    focus:border-primary-500 focus:ring-primary-500"
                placeholder="John Doe"
                onChange={handleNameChange}
                value={formInput.name}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=":border-primary-500 :ring-primary-500 block w-full rounded-lg border border-primary-200 bg-background-100 p-2.5 text-sm text-text shadow-sm outline-none
              focus:border-primary-500 focus:ring-primary-500
              "
                onChange={handleEmailChange}
                placeholder="name@email.com"
                value={formInput.email}
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-text "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full rounded-lg border border-primary-200 bg-background-100 p-3.5 text-sm text-text shadow-sm outline-none focus:border-primary-500"
                placeholder="Your message"
                onChange={handleMessageChange}
                value={formInput.message}
              ></textarea>
            </div>
            <button
              type="submit"
              className=":ring-primary-800 rounded-lg bg-primary-300 px-5 py-3 text-center text-sm font-medium text-text hover:bg-primary-800 focus:outline-none  focus:ring-4 focus:ring-primary-300 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};
export default Contact;
