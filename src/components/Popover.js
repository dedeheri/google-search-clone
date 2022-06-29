import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

// icons
import { CgMenuGridO } from "react-icons/cg";

// image
import {
  drive,
  gmail,
  google,
  maps,
  translete,
  photo,
  youtube,
} from "../assets";
function PopoverApp() {
  const appData = [
    {
      id: 1,
      icons: maps,
      name: "Search",
      url: "https://www.google.co.id/maps?hl=id",
    },
    {
      id: 2,
      icons: youtube,
      name: "Youtube",
      url: "https://www.youtube.com",
    },
    {
      id: 3,
      icons: gmail,
      name: "Gmail",
      url: "https://mail.google.com/mail/&ogbl",
    },
    {
      id: 4,
      icons: google,
      name: "Search",
      url: "https://www.google.com/",
    },
    {
      id: 5,
      icons: drive,
      name: "Drive",
      url: "https://drive.google.com/drive/",
    },
    {
      id: 6,
      icons: translete,
      name: "Translate",
      url: "https://translate.google.co.id/?hl=en/",
    },
    {
      id: 7,
      icons: photo,
      name: "Photo",
      url: "https://photos.google.com/?pageId=none&pli=1",
    },
  ];

  return (
    <Popover className="relative">
      <Popover.Button className="text-white hover:bg-[#2F3034] p-2 rounded-full">
        <CgMenuGridO fontSize={25} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-3 w-80 max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-[#393D40] text-white ">
              <div className="grid grid-cols-3 gap-2 p-4">
                {appData.map(({ id, icons, name, url }) => (
                  <a
                    href={url}
                    target="_noblank"
                    key={id}
                    className="space-y-3 hover:bg-[#2F3034] rounded-lg duration-100 p-2 "
                  >
                    <img
                      src={icons}
                      alt={icons}
                      className="h-10 w-10 mx-auto"
                    />
                    <h1 className="text-sm whitespace-nowrap text-center text-white font-medium">
                      {name}
                    </h1>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default PopoverApp;
