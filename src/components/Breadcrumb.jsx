import React from "react";
import home from "../images/home.png";
function Breadcrumb() {
  return (
    <div className="lg:ml-28 md:ml-10 sm:ml-10 ml-4 mt-6">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <img src={home} alt="homeImage" className="h-5" />
          </li>

          <li class="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a
              href="#"
              class="block transition hover:text-gray-700 font-medium text-base"
            >
              Flashcard
            </a>
          </li>

          <li class="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a
              href="#"
              class="block transition hover:text-gray-700 font-medium text-base"
            >
              Mathematics
            </a>
          </li>
          <li class="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a
              href="#"
              class="block transition hover:text-gray-700 text-blue-700 font-medium text-base"
            >
              Relation and Function
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
