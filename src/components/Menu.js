import React, { useState } from "react";

// icons
import { CgMenuGridO } from "react-icons/cg";
// image
import {
  banner,
  drive,
  gmail,
  google,
  maps,
  translete,
  photo,
  youtube,
} from "../assets";

function Menu() {
  const [app, setApp] = useState(false);

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
    <>
      <button
        onClick={() => setApp(!app)}
        className="text-white hover:bg-[#2F3034] p-2 rounded-full"
      >
        <CgMenuGridO fontSize={25} />
      </button>

      {app && (
        <div className="absolute top-14 shadow-xl">
          <div className="w-72 rounded-lg bg-[#393D40]">
            <div className="grid grid-cols-3 gap-2 p-4">
              {appData.map(({ id, icons, name, url }) => (
                <a
                  href={url}
                  target="_noblank"
                  key={id}
                  className="space-y-3 hover:bg-[#2F3034] rounded-lg duration-100 p-2 "
                >
                  <img src={icons} alt={icons} className="h-10 w-10 mx-auto" />
                  <h1 className="text-sm whitespace-nowrap text-center text-white font-medium">
                    {name}
                  </h1>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
