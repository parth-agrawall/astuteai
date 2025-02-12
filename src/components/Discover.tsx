import { SVGProps } from "react";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { FaBusinessTime } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { FaUsersCog } from "react-icons/fa";

type IconKey =
  | "zap"
  | "chart-spline"
  | "life-buoy"
  | "palette"
  | "shield-check"
  | "waypoints";

const iconMap: Record<IconKey, React.FC<SVGProps<SVGSVGElement>>> = {
  zap: FaBusinessTime,  
  "chart-spline": FaUsersCog, 
  "life-buoy": BiTask,
  palette: MdOutlineQueryStats, 
  "shield-check": LuBrainCircuit, 
  waypoints: GrLanguage, 
};

export const Discover = () => {
  const features: { title: string; description: string; icon: IconKey }[] = [
    {
      title: "Fast and Efficient",
      description:
        "Enjoy fast and flawless content creation with our optimized AI tools.",
      icon: "zap",
    },
    {
      title: "User-Friendly Convenience ",
      description:
        "Gain valuable insights and analytics to enhance your social media strategy.",
      icon: "chart-spline",
    },
    {
      title: "Task Automation ",
      description:
        "Our team is available around the clock to assist with any issues or questions.",
      icon: "life-buoy",
    },
    {
      title: "Strategic Planning Made Easy",
      description:
        "Tailor the tools and features to fit your unique social media needs.",
      icon: "palette",
    },
    {
      title: "AI-Powered Assistance",
      description:
        "Trust our platform to keep your data safe and ensure consistent performance.",
      icon: "shield-check",
    },
    {
      title: "Multilingual Capability",
      description:
        "Easily integrate with your existing social media platforms and tools.",
      icon: "waypoints",
    },
  ];

  return (
    <div className="flex flex-col bg-black items-center justify-center pb-12 pt-4 md:py-16 lg:pb-12 lg:pt-4 w-full">
      {" "}
      <div className="flex items-center justify-center mx-auto mt-8">
        <svg
          className="w-auto h-80"
          width="328"
          height="401"
          viewBox="0 0 328 401"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="131"
            y="56"
            width="60"
            height="315"
            fill="url(#paint0_linear_50_493)"
          />
          <g clipPath="url(#clip0_50_493)">
            <rect
              x="131"
              y="341"
              width="60"
              height="60"
              rx="10"
              fill="#8209ba"
            />
            <rect
              x="174.5"
              y="333.5"
              width="24"
              height="24"
              rx="4.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="123.5"
              y="333.5"
              width="24"
              height="24"
              rx="4.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="123.5"
              y="384.5"
              width="24" 
              height="24"
              rx="4.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="146.5"
              y="356.5"
              width="29"
              height="29"
              rx="4.5"
              fill="#9d00ff"
              stroke="#8209ba"
            />
            <path
              d="M162.606 369.088C162.29 368.778 162.29 368.284 162.29 367.297V367.039C162.29 364.302 162.29 362.933 161.521 362.698C160.751 362.462 159.926 363.578 158.277 365.809L155.725 369.262C154.655 370.71 154.119 371.435 154.414 372.004C154.419 372.014 154.424 372.023 154.429 372.032C154.742 372.593 155.666 372.593 157.515 372.593C158.543 372.593 159.057 372.593 159.379 372.896"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M162.605 369.088L162.622 369.104C162.944 369.407 163.458 369.407 164.486 369.407C166.335 369.407 167.259 369.407 167.572 369.968C167.577 369.977 167.582 369.986 167.587 369.996C167.882 370.565 167.346 371.29 166.276 372.738L163.724 376.191C162.075 378.422 161.25 379.538 160.48 379.302C159.711 379.067 159.711 377.698 159.711 374.961V374.703C159.711 373.715 159.711 373.222 159.396 372.912L159.379 372.896"
              stroke="white"
              strokeWidth="1.5"
            />
            <rect
              x="174.5"
              y="384.5"
              width="24"
              height="24"
              rx="4.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
          </g>
          <rect
            x="131.5"
            y="341.5"
            width="59"
            height="59"
            rx="9.5"
            stroke="url(#paint1_linear_50_493)"
            strokeOpacity="0.95"
          />
          <rect
            x="250"
            y="9"
            width="50"
            height="315"
            fill="url(#paint2_linear_50_493)"
          />
          <g clipPath="url(#clip1_50_493)">
            <rect
              x="250"
              y="299"
              width="50"
              height="50"
              rx="8"
              fill="#8209ba"
            />
            <rect
              x="287.5"
              y="288.5"
              width="24"
              height="24"
              rx="3.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="238.5"
              y="288.5"
              width="24"
              height="24"
              rx="3.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="238.5"
              y="335.5"
              width="24"
              height="24"
              rx="3.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="262.5"
              y="311.5"
              width="25"
              height="25"
              rx="3.5"
              fill="#9d00ff"
              stroke="#8209ba"
            />
            <rect
              x="287.5"
              y="335.5"
              width="24"
              height="24"
              rx="3.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <path
              d="M272.36 317.896C272.634 317.201 273.616 317.201 273.89 317.896L274.739 320.048C274.822 320.26 274.99 320.427 275.202 320.511L277.354 321.36C278.049 321.634 278.049 322.616 277.354 322.89L275.202 323.739C274.99 323.822 274.822 323.99 274.739 324.202L273.89 326.354C273.616 327.049 272.634 327.049 272.36 326.354L271.511 324.202C271.427 323.99 271.26 323.822 271.048 323.739L268.896 322.89C268.201 322.616 268.201 321.634 268.896 321.36L271.048 320.511C271.26 320.427 271.427 320.26 271.511 320.048L272.36 317.896Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M279.053 325.567C279.198 325.2 279.718 325.2 279.863 325.567L280.496 327.174C280.541 327.286 280.629 327.375 280.742 327.419L282.349 328.053C282.716 328.198 282.716 328.718 282.349 328.863L280.742 329.497C280.629 329.541 280.541 329.63 280.496 329.742L279.863 331.349C279.718 331.717 279.198 331.717 279.053 331.349L278.419 329.742C278.375 329.63 278.286 329.541 278.174 329.497L276.567 328.863C276.199 328.718 276.199 328.198 276.567 328.053L278.174 327.419C278.286 327.375 278.375 327.286 278.419 327.174L279.053 325.567Z"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
          <rect
            x="250.5"
            y="299.5"
            width="49"
            height="49"
            rx="7.5"
            stroke="url(#paint3_linear_50_493)"
            strokeOpacity="0.95"
          />
          <rect
            x="31"
            width="40"
            height="315"
            fill="url(#paint4_linear_50_493)"
          />
          <g clipPath="url(#clip2_50_493)">
            <rect x="31" y="295" width="40" height="40" rx="6" fill="#8209ba" />
            <rect
              x="60.5"
              y="282.5"
              width="24"
              height="24"
              rx="2.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="17.5"
              y="282.5"
              width="24"
              height="24"
              rx="2.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="17.5"
              y="323.5"
              width="24"
              height="24"
              rx="2.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <rect
              x="41.5"
              y="305.5"
              width="19"
              height="19"
              rx="2.5"
              fill="#9d00ff"
              stroke="#8209ba"
            />
            <rect
              x="60.5"
              y="323.5"
              width="24"
              height="24"
              rx="2.5"
              fill="#9d00ff"
              stroke="#b371e3"
            />
            <path
              d="M54.7064 314.426L51.5394 317.583L52.113 318.159L55.2801 315.001L54.7064 314.426ZM49.1374 317.583L48.3935 316.842L47.8199 317.417L48.5638 318.159L49.1374 317.583ZM48.3935 314.45L51.5606 311.293L50.9869 310.717L47.8199 313.875L48.3935 314.45ZM53.5055 310.49H53.8136V309.677H53.5055V310.49ZM55.5114 312.181V312.489H56.3239V312.181H55.5114ZM53.8136 310.49C54.321 310.49 54.6608 310.491 54.914 310.525C55.1556 310.557 55.2567 310.613 55.3227 310.678L55.8964 310.103C55.6542 309.862 55.3532 309.764 55.022 309.719C54.7022 309.676 54.2981 309.677 53.8136 309.677V310.49ZM56.3239 312.181C56.3239 311.698 56.3248 311.295 56.2818 310.976C56.2371 310.645 56.1387 310.345 55.8964 310.103L55.3227 310.678C55.3885 310.744 55.4441 310.844 55.4765 311.085C55.5105 311.337 55.5114 311.675 55.5114 312.181H56.3239ZM48.3935 316.842C48.0347 316.484 47.7952 316.244 47.6403 316.042C47.4926 315.849 47.4609 315.738 47.4609 315.646H46.6484C46.6484 315.988 46.7921 316.27 46.9951 316.535C47.1909 316.791 47.4774 317.076 47.8199 317.417L48.3935 316.842ZM48.5638 318.159C48.9063 318.5 49.1916 318.786 49.4482 318.981C49.7142 319.183 49.9964 319.326 50.3384 319.326V318.514C50.2447 318.514 50.1337 318.482 49.9401 318.334C49.737 318.18 49.4963 317.941 49.1374 317.583L48.5638 318.159ZM55.2801 315.001C55.7126 314.57 56.0143 314.279 56.1727 313.898L55.4224 313.586C55.3405 313.783 55.1861 313.948 54.7064 314.426L55.2801 315.001ZM55.5114 312.489C55.5114 313.165 55.5042 313.39 55.4224 313.586L56.1727 313.898C56.3311 313.517 56.3239 313.098 56.3239 312.489H55.5114ZM51.5606 311.293C52.0401 310.815 52.2049 310.661 52.403 310.579L52.0928 309.828C51.7109 309.986 51.4197 310.286 50.9869 310.717L51.5606 311.293ZM53.5055 309.677C52.8935 309.677 52.4747 309.67 52.0928 309.828L52.403 310.579C52.6012 310.497 52.8273 310.49 53.5055 310.49V309.677ZM51.5394 317.583C51.2624 317.859 51.054 318.067 50.875 318.222C50.6952 318.377 50.5741 318.453 50.4791 318.488L50.7599 319.25C50.9917 319.165 51.2007 319.014 51.406 318.837C51.6121 318.659 51.8436 318.427 52.113 318.159L51.5394 317.583ZM50.4791 318.488C50.4291 318.506 50.3844 318.514 50.3384 318.514V319.326C50.4851 319.326 50.6246 319.3 50.7599 319.25L50.4791 318.488ZM47.8199 313.875C47.5569 314.137 47.3299 314.363 47.1536 314.564C46.9781 314.765 46.8279 314.968 46.7384 315.19L47.4923 315.493C47.5307 315.398 47.6098 315.277 47.7647 315.1C47.9189 314.924 48.1236 314.72 48.3935 314.45L47.8199 313.875ZM46.7384 315.19C46.68 315.336 46.6484 315.486 46.6484 315.646H47.4609C47.4609 315.597 47.4698 315.549 47.4923 315.493L46.7384 315.19Z"
              fill="white"
            />
            <path
              d="M47.0197 315.246L47.307 314.959L47.3065 314.958L47.0197 315.246ZM49.3739 313.02C49.5626 313.142 49.814 313.087 49.9354 312.898C50.0568 312.71 50.0023 312.458 49.8137 312.337L49.3739 313.02ZM50.7716 319.021L50.4844 319.308C50.4907 319.314 50.4971 319.32 50.5038 319.326L50.7716 319.021ZM53.6554 316.167C53.5334 315.979 53.2819 315.925 53.0936 316.047C52.9053 316.169 52.8514 316.421 52.9734 316.609L53.6554 316.167ZM51.0549 319.269L51.3417 318.981L51.3325 318.972L51.3227 318.964L51.0549 319.269ZM49.8137 312.337L49.4728 312.118L49.0331 312.801L49.3739 313.02L49.8137 312.337ZM49.4728 312.118C49.1362 311.901 48.8645 311.726 48.6307 311.6C48.3918 311.471 48.168 311.38 47.9205 311.343L47.8017 312.147C47.9205 312.164 48.0508 312.21 48.2453 312.315C48.4449 312.423 48.686 312.577 49.0331 312.801L49.4728 312.118ZM45.4929 313.634C45.7979 313.33 46.1251 313.003 46.419 312.735C46.5659 312.601 46.6997 312.486 46.8144 312.398C46.9354 312.305 47.0122 312.259 47.0487 312.244L46.7373 311.494C46.598 311.551 46.4518 311.651 46.3184 311.754C46.1787 311.862 46.0265 311.994 45.8714 312.135C45.5616 312.418 45.2211 312.757 44.9193 313.058L45.4929 313.634ZM47.9205 311.343C47.5225 311.284 47.1133 311.338 46.7373 311.494L47.0487 312.244C47.2928 312.143 47.5535 312.11 47.8017 312.147L47.9205 311.343ZM45.1969 314.402L45.402 314.483L45.7013 313.728L45.4962 313.647L45.1969 314.402ZM46.2125 315.015L46.7329 315.534L47.3065 314.958L46.7861 314.44L46.2125 315.015ZM45.402 314.483C45.4365 314.497 45.4503 314.503 45.4637 314.508L45.7732 313.757C45.7536 313.749 45.7339 313.741 45.7013 313.728L45.402 314.483ZM46.7861 314.44C46.7614 314.415 46.7464 314.4 46.7312 314.385L46.1654 314.968C46.1757 314.978 46.1862 314.989 46.2125 315.015L46.7861 314.44ZM45.4637 314.508C45.7248 314.616 45.963 314.772 46.1654 314.968L46.7312 314.385C46.4547 314.117 46.1296 313.904 45.7732 313.757L45.4637 314.508ZM44.9193 313.058C44.5001 313.476 44.6479 314.185 45.1969 314.402L45.4962 313.647C45.4938 313.646 45.4928 313.645 45.4927 313.645C45.4928 313.645 45.4925 313.645 45.4927 313.645C45.4924 313.645 45.4912 313.643 45.4907 313.641C45.4902 313.638 45.4905 313.637 45.4905 313.636C45.4905 313.637 45.4906 313.636 45.4905 313.636C45.4906 313.636 45.4912 313.635 45.4929 313.634L44.9193 313.058ZM52.9734 316.609L53.1934 316.949L53.8754 316.507L53.6554 316.167L52.9734 316.609ZM52.3582 320.475L52.3127 320.52L52.8864 321.096L52.9319 321.05L52.3582 320.475ZM53.1934 316.949C53.4175 317.295 53.5728 317.535 53.6806 317.734C53.7856 317.928 53.8314 318.057 53.8489 318.175L54.6526 318.056C54.6158 317.809 54.524 317.585 54.3949 317.347C54.2685 317.114 54.0927 316.843 53.8754 316.507L53.1934 316.949ZM52.9319 321.05C53.2337 320.749 53.5743 320.41 53.8578 320.101C53.9997 319.946 54.1318 319.795 54.2398 319.655C54.3429 319.522 54.4434 319.376 54.5016 319.237L53.7518 318.924C53.7367 318.96 53.6913 319.037 53.5977 319.157C53.509 319.272 53.3936 319.405 53.2593 319.552C52.9903 319.845 52.6633 320.171 52.3582 320.475L52.9319 321.05ZM53.8489 318.175C53.8856 318.422 53.8532 318.681 53.7518 318.924L54.5016 319.237C54.6583 318.862 54.7117 318.453 54.6526 318.056L53.8489 318.175ZM51.3227 318.964L51.0394 318.715L50.5038 319.326L50.787 319.575L51.3227 318.964ZM52.3672 320.536C52.2509 320.244 52.1811 320.067 52.0892 319.899L51.3769 320.29C51.4393 320.404 51.4892 320.527 51.6125 320.837L52.3672 320.536ZM50.768 319.557C51.0041 319.792 51.098 319.887 51.1782 319.989L51.8177 319.488C51.6998 319.338 51.5644 319.203 51.3417 318.981L50.768 319.557ZM52.0892 319.899C52.0101 319.755 51.9192 319.617 51.8177 319.488L51.1782 319.989C51.2525 320.084 51.3189 320.185 51.3769 320.29L52.0892 319.899ZM52.3127 320.52C52.3162 320.517 52.3218 320.513 52.3281 320.512C52.3334 320.51 52.3374 320.51 52.3403 320.511C52.343 320.511 52.3477 320.513 52.3533 320.517C52.3596 320.522 52.3647 320.529 52.3672 320.536L51.6125 320.837C51.8205 321.358 52.4964 321.484 52.8864 321.096L52.3127 320.52ZM51.0589 318.734L50.9066 318.581L50.3321 319.156L50.4844 319.308L51.0589 318.734ZM46.7324 315.533L46.8279 315.629L47.4024 315.054L47.307 314.959L46.7324 315.533Z"
              fill="white"
            />
            <path
              d="M49.8809 316.675C50.0398 316.517 50.0402 316.26 49.8818 316.101C49.7234 315.942 49.4661 315.941 49.3073 316.1L49.8809 316.675ZM48.7651 317.788L49.8809 316.675L49.3073 316.1L48.1914 317.212L48.7651 317.788ZM53.0268 313.875C52.7745 314.126 52.3649 314.126 52.1126 313.875L51.539 314.45C52.1083 315.018 53.031 315.018 53.6004 314.45L53.0268 313.875ZM52.1126 313.875C51.861 313.624 51.861 313.218 52.1126 312.967L51.539 312.392C50.9689 312.96 50.9689 313.882 51.539 314.45L52.1126 313.875ZM52.1126 312.967C52.3649 312.715 52.7745 312.715 53.0268 312.967L53.6004 312.392C53.031 311.824 52.1083 311.824 51.539 312.392L52.1126 312.967ZM53.0268 312.967C53.2784 313.218 53.2784 313.624 53.0268 313.875L53.6004 314.45C54.1705 313.882 54.1705 312.96 53.6004 312.392L53.0268 312.967Z"
              fill="white"
            />
          </g>
          <rect
            x="31.5"
            y="295.5"
            width="39"
            height="39"
            rx="5.5"
            stroke="url(#paint5_linear_50_493)"
            strokeOpacity="0.95"
          />
          <circle cx="217" cy="372.605" r="2" fill="#9900e0" />
          <path
            d="M217 296L217 371.263"
            stroke="url(#paint6_linear_50_493)"
            strokeLinecap="round"
          />
          <g filter="url(#filter0_f_50_493)">
            <circle cx="217" cy="373" r="4" fill="#9900e0" />
          </g>
          <circle cx="316" cy="283.605" r="2" fill="#9900e0" />
          <path
            d="M316 207L316 282.263"
            stroke="url(#paint7_linear_50_493)"
            strokeLinecap="round"
          />
          <g filter="url(#filter1_f_50_493)">
            <circle cx="316" cy="284" r="4" fill="#9900e0" />
          </g>
          <circle cx="82" cy="286.605" r="2" fill="#9900e0" />
          <path
            d="M82 210L82 285.263"
            stroke="url(#paint8_linear_50_493)"
            strokeLinecap="round"
          />
          <g filter="url(#filter2_f_50_493)">
            <circle cx="82" cy="287" r="4" fill="#9900e0" />
          </g>
          <circle cx="12" cy="246.605" r="2" fill="#9900e0" />
          <path
            d="M12 170L12 245.263"
            stroke="url(#paint9_linear_50_493)"
            strokeLinecap="round"
          />
          <g filter="url(#filter3_f_50_493)">
            <circle cx="12" cy="247" r="4" fill="#9900e0" />
          </g>
          <circle cx="115" cy="321.605" r="2" fill="#9900e0" />
          <path
            d="M115 245L115 320.263"
            stroke="url(#paint10_linear_50_493)"
            strokeLinecap="round"
          />
          <g filter="url(#filter4_f_50_493)">
            <circle cx="115" cy="322" r="4" fill="#9900e0" />
          </g>
          <defs>
            <filter
              id="filter0_f_50_493"
              x="205"
              y="361"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4"
                result="effect1_foregroundBlur_50_493"
              />
            </filter>
            <filter
              id="filter1_f_50_493"
              x="304"
              y="272"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4"
                result="effect1_foregroundBlur_50_493"
              />
            </filter>
            <filter
              id="filter2_f_50_493"
              x="70"
              y="275"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4"
                result="effect1_foregroundBlur_50_493"
              />
            </filter>
            <filter
              id="filter3_f_50_493"
              x="0"
              y="235"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4"
                result="effect1_foregroundBlur_50_493"
              />
            </filter>
            <filter
              id="filter4_f_50_493"
              x="103"
              y="310"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4"
                result="effect1_foregroundBlur_50_493"
              />
            </filter>
            <linearGradient
              id="paint0_linear_50_493"
              x1="161"
              y1="56"
              x2="161"
              y2="371"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="1" stopColor="#9d00ff" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_50_493"
              x1="161"
              y1="341"
              x2="161"
              y2="401"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.5" />
              <stop offset="1" stopColor="#9900e0" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_50_493"
              x1="275"
              y1="9"
              x2="275"
              y2="324"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="1" stopColor="#9d00ff" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_50_493"
              x1="275"
              y1="299"
              x2="275"
              y2="349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.5" />
              <stop offset="1" stopColor="#9900e0" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_50_493"
              x1="51"
              y1="0"
              x2="51"
              y2="315"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="1" stopColor="#9d00ff" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_50_493"
              x1="51"
              y1="295"
              x2="51"
              y2="335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.5" />
              <stop offset="1" stopColor="#9900e0" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_50_493"
              x1="216.5"
              y1="296"
              x2="216.5"
              y2="371.263"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#040102" stopOpacity="0" />
              <stop offset="1" stopColor="#9900e0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_50_493"
              x1="315.5"
              y1="207"
              x2="315.5"
              y2="282.263"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#040102" stopOpacity="0" />
              <stop offset="1" stopColor="#9900e0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_50_493"
              x1="81.5"
              y1="210"
              x2="81.5"
              y2="285.263"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#040102" />
              <stop offset="1" stopColor="#9900e0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_50_493"
              x1="11.5"
              y1="170"
              x2="11.5"
              y2="245.263"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#040102" />
              <stop offset="1" stopColor="#9900e0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_50_493"
              x1="114.5"
              y1="245"
              x2="114.5"
              y2="320.263"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#040102" stopOpacity="0" />
              <stop offset="1" stopColor="#9900e0" />
            </linearGradient>
            <clipPath id="clip0_50_493">
              <rect
                x="131"
                y="341"
                width="60"
                height="60"
                rx="10"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip1_50_493">
              <rect
                x="250"
                y="299"
                width="50"
                height="50"
                rx="8"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip2_50_493">
              <rect x="31" y="295" width="40" height="40" rx="6" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="w-full h-full mt-8"
        style={{ opacity: 1, transform: "none", willChange: "auto" }}
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <AnimatedGradientText>
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Perks
            </span>
          </AnimatedGradientText>
          <h2 className="text-2xl md:text-4xl text-white lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Experience the benefits
          </h2>
          <p className="text-base text-zinc-400 md:text-lg text-center text-accent-foreground/80 mt-6">
            Explore the powerful features and advantages that Astute offers to
            help you grow your digital presence.
          </p>
        </div>
      </div>
      <div
        className="max-w-7xl  px-4 md:px-12 py-7 relative size-full"
        style={{ opacity: 1, transform: "none", willChange: "auto" }}
      >
        <div
          className="max-w-7xl px-4 md:px-12 py-7 relative size-full"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          <div className="mt-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800 lg:border-b"
                  >
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-violet-950/25 to-transparent pointer-events-none"></div>
                    <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
                      <div className="mb-4 relative z-10 px-10">
                        <IconComponent className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-white" />
                      </div>
                      <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
                        <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-violet-600 transition-all duration-500 origin-center"></div>
                        <span className="transition duration-500 inline-block text-violet-300">
                          {feature.title}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
