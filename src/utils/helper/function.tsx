import CryptoJS from "crypto-js";

import { doDecrypt, doEncrypt } from "./encrypt";
import { LocalStorageItem, UserLogin } from "../../interface";
import { useEffect, useState } from "react";
import { Logo } from "@/assets";
export const { VITE_APP_BE, VITE_APP_KEY, VITE_APP_MODE, VITE_APP_SECRETKEY } =
  import.meta.env;

interface LoadingContentProps {
  loading?: boolean;
}

export const LoadingContent: React.FC<LoadingContentProps> = ({ loading }) => {
  return (
    <div id="cover-spin" style={{ display: loading ? "block" : "none" }}></div>
  );
};
export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return "lg";
  }
  if (windowWidth >= 992) {
    return "md";
  }
  if (windowWidth >= 768) {
    return "sm";
  }
  return "xs";
};

export const loadImage = (path: string) => {
  return VITE_APP_BE.replaceAll("/api", "") + path;
};

export const playSound = (src: string): void => {
  const sound = new Audio();
  sound.src = src;
  sound.play();
};

export const pembulatan = (harga: number) => {
  const parameter = 500;
  const harga_calculated = harga;

  const harga_modded = harga_calculated % Number(parameter);

  let harga_jual = harga_calculated;

  if (harga_modded !== 0) {
    harga_jual = harga_jual - harga_modded + Number(parameter);
  }
  return harga_jual || 0;
};

export const getCurrentDateTime = () => {
  const currentDate = new Date();

  // Mendapatkan informasi tanggal, bulan, dan tahun
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Ingat, indeks bulan dimulai dari 0
  const year = currentDate.getFullYear();

  // Mendapatkan informasi jam, menit, dan detik
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format tampilan tanggal dan waktu
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export const maskEmail = (email: string) => {
  if (!email) return "";

  const finalArr: string[] = [];
  const len: number = email.indexOf("@");

  email.split("").forEach((_item: string, pos: number) => {
    pos >= 1 && pos <= len - 2 ? finalArr.push("*") : finalArr.push(email[pos]);
  });

  return finalArr.join("");
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("kr-KO").format(number);
};
export const maskPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return "";

  const visibleDigits = 4; // Jumlah digit nomor yang tetap ditampilkan (misal: 0812-xxxx-xxxx, visibleDigits = 4)
  const maskedLength = phoneNumber.length - visibleDigits;
  const maskedChars = "*".repeat(maskedLength);

  return phoneNumber.substr(0, visibleDigits) + maskedChars;
};

export const renderStatus = (value?: string) => {
  return value === "hampir_habis" ? "HAMPIR HABIS" : value?.toUpperCase();
};
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getItem = <T,>(nama: string): T => {
  if (typeof window !== "undefined") {
    const encryptedNama = doEncrypt(nama);
    const item = localStorage.getItem(encryptedNama);

    if (item !== null) {
      const decryptedData = doDecrypt(JSON.parse(item));
      return decryptedData as T;
    } else {
      return [] as T;
    }
  }
  return [] as T;
};

export const userData: UserLogin = getItem<UserLogin>("userdata");

export const setItem = <T,>(nama: string, data: T) => {
  if (typeof window !== "undefined") {
    const item: LocalStorageItem<T> = {
      nama: doEncrypt(nama),
      data: doEncrypt(data),
    };
    localStorage.setItem(item.nama, JSON.stringify(item.data));
  }
};

export const removeItem = (nama: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(doEncrypt(nama));
  }
};
export const timestamp = Math.floor(Date.now() / (1000 * 100000));

export const generateSignature = () => {
  const userData: UserLogin = getItem<UserLogin>("userdata");
  const signatur = {
    APP_KEY: `${VITE_APP_KEY}`,
    TOKEN: `${userData?.access_token}`,
    timestamp: Number(VITE_APP_MODE === 0 ? 0 : timestamp),
  };
  const serializedData = JSON.stringify(signatur);
  const signature = CryptoJS.HmacSHA256(
    serializedData,
    VITE_APP_SECRETKEY
  ).toString();
  return signature;
};

export const LoadingApp = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src={Logo}
        alt="AdminLTELogo"
        height="60"
        width="60"
      />
    </div>
  );
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const removeWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById("root");
  if (window) {
    window.classList.remove(classList);
  }
};

export const addWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById("root");
  if (window) {
    window.classList.add(classList);
  }
};
