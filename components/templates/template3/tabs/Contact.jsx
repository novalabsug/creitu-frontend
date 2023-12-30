import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";
import React from "react";

const ContactTab = () => {
  return (
    <div className="p-8 h-full overflow-auto">
      <div className="py-3">
        <p className="text-green-500 font-light">contact</p>
        <h3 className="text-3xl text-white font-semibold">Let's talk</h3>
      </div>

      <div className="py-3">
        <div className="flex gap-4 lg:flex-row flex-col">
          <div className="lg:w-2/4 w-full py-2">
            <div className="flex gap-2">
              <div className="cursor-pointer py-1">
                <Facebook className="text-white" size={22} strokeWidth={1.5} />
              </div>

              <div className="cursor-pointer py-1">
                <Twitter className="text-white" size={22} strokeWidth={1.5} />
              </div>

              <div className="cursor-pointer py-1">
                <Instagram className="text-white" size={22} strokeWidth={1.5} />
              </div>

              <div className="cursor-pointer py-1">
                <Linkedin className="text-white" size={22} strokeWidth={1.5} />
              </div>

              <div className="cursor-pointer py-1">
                <Twitch className="text-white" size={22} strokeWidth={1.5} />
              </div>
            </div>

            <div className="py-4">
              <div className="flex gap-4 py-2">
                <div>
                  <Mail className="text-white" size={22} strokeWidth={1.5} />{" "}
                </div>

                <p className="text-white">jimmymort@gmail.com</p>
              </div>

              <div className="flex gap-4 py-2">
                <div>
                  <Phone className="text-white" size={22} strokeWidth={1.5} />{" "}
                </div>

                <p className="text-white">256 7653 736453</p>
              </div>

              <div className="flex gap-4 py-2">
                <div>
                  <Phone className="text-white" size={22} strokeWidth={1.5} />{" "}
                </div>

                <p className="text-white">256 7884 6454836</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/4 w-full">
            <div className="py-2">
              <h3 className="font-semibold text-white text-lg">
                Leave a message
              </h3>
            </div>

            <form action="">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className="py-1">
                  <label htmlFor="name" className="text-white text-sm">
                    Name
                  </label>

                  <div className="py-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-300 rounded py-2 px-3 text-sm outline-none border-0 w-full"
                    />
                  </div>
                </div>

                <div className="py-1">
                  <label htmlFor="email" className="text-white text-sm">
                    Email
                  </label>

                  <div className="py-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-300 rounded py-2 px-3 text-sm outline-none border-0 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="py-1">
                <label htmlFor="subject" className="text-white text-sm">
                  Subject
                </label>

                <div className="py-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="bg-gray-300 rounded py-2 px-3 text-sm outline-none border-0 w-full"
                  />
                </div>
              </div>

              <div className="py-1">
                <label htmlFor="message" className="text-white text-sm">
                  Message
                </label>

                <div className="py-1">
                  <textarea
                    name="message"
                    id="message"
                    className="bg-gray-300 rounded py-2 px-3 text-sm outline-none border-0 w-full"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
