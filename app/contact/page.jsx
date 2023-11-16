import ButtonCustom from "@/components/ButtonCustom";
import UiCard1 from "@/components/UiCard1";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { landingContent1 } from "@/constants/constant";
import { Instagram, MailIcon, PhoneIcon, Twitch, Twitter } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <main>
      {/* //section --------------------- */}
      <div className="py-8">
        <div className="flex m-auto lg:w-4/5 sm:w-4/5 w-[95%]">
          <div className="py-4 px-8">
            <div className="flex justify-center items-center lg:gap-6 gap-2 lg:flex-row flex-col">
              {landingContent1.map((content, index) => (
                <UiCard1
                  title={content.title}
                  subTitle={content.subTitle}
                  content={content.content}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="py-12">
        <div className="flex">
          <div className="m-auto lg:w-3/5 sm:w-4/5 w-4/5">
            <div className="py-4">
              <h3 className="text-3xl text-center text-white">
                Do you have a question
              </h3>

              <p className="text-center text-white font-light">
                Our team will happily take on any questions that you may have
              </p>
            </div>

            <div className="flex gap-4 py-4 lg:flex-row sm:flex-row flex-col-reverse">
              <div className="lg:w-2/4 sm:w-2/4 w-full">
                <form>
                  <div className="py-2">
                    <Input
                      className="w-full"
                      type="text"
                      placeholder="names ..."
                    />
                  </div>

                  <div className="py-2">
                    <Input
                      className="w-full"
                      type="text"
                      placeholder="email ..."
                    />
                  </div>

                  <div className="py-2">
                    <Textarea
                      className="w-full"
                      placeholder="leave a message"
                    />
                  </div>

                  <div className="py-2">
                    <div className="flex justify-center items-center">
                      <div>
                        <ButtonCustom
                          type={"submit"}
                          text={"Send Message"}
                          variant={
                            "bg-[#0c7199] hover:bg-[#095878] text-white font-light"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="lg:w-2/4 sm:w-2/4 w-full p-4 lg:block sm:block flex justify-center items-center flex-col">
                <div className="py-2 flex">
                  <MailIcon className="text-white mr-3" />

                  <p className="font-semibold text-lg text-slate-200">
                    creituug@gmail.com
                  </p>
                </div>

                <div className="py-2 flex">
                  <PhoneIcon className="text-white mr-3" />

                  <p className="font-semibold text-lg text-slate-200">
                    256 764 5635472
                  </p>
                </div>

                <div className="py-6">
                  <div className="flex gap-6">
                    <div>
                      <Twitter
                        size={35}
                        className="cursor-pointer text-white hover:text-[#0c7199]"
                      />
                    </div>

                    <div>
                      <Instagram
                        size={35}
                        className="cursor-pointer text-white hover:text-[#0c7199]"
                      />
                    </div>

                    <div>
                      <Twitch
                        size={35}
                        className="cursor-pointer text-white hover:text-[#0c7199]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
