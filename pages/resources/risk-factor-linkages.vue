<template>
  <div>
    <section class="pt-8 md:pt-16 :xl:pt-20 m-4">
      <div class="max-w-5xl mx-auto md:px-4">
        <h1
          v-if="isEnglish"
          class="text-40 text-gray-300 leading-11 font-medium text-center font-museo-slab mb-14"
        >
          WELL country briefs
        </h1>
        <h1
          v-if="isChinese"
          class="text-40 text-gray-300 leading-11 font-medium text-center font-museo-slab mb-14"
        >
          WELL country briefs
        </h1>
        <p v-if="isEnglish" class="text-gray-50 text-base font-light leading-7">
          The WELL country briefs connect national health data to strategies for
          enhancing health and well-being in buildings and communities around
          the world. We created linkages only if there was available data in the
          Global Burden of Disease database from the Institute of Health Metrics
          and Evaluation (IHME) at the University of Washington.
        </p>
        <p v-if="isEnglish" class="font-bold text-lg leading-8 text-gray-50">
          Data driven design
        </p>
        <ul
          v-if="isEnglish"
          class="list-disc text-gray-50 text-base font-light leading-7 ml-4 md:ml-10"
        >
          <li>
            Demonstrate how WELL features can address regional health risk
            factors.
          </li>
          <li>
            Prioritize WELL features based on available national health data.
          </li>
        </ul>
        <p v-if="isChinese" class="text-gray-50 text-base font-light leading-7">
          The WELL country briefs connect national health data to strategies for
          enhancing health and well-being in buildings and communities around
          the world. We created linkages only if there was available data in the
          Global Burden of Disease database from the Institute of Health Metrics
          and Evaluation (IHME) at the University of Washington.
        </p>
        <p v-if="isChinese" class="font-bold text-lg leading-8">
          Data driven design
        </p>
        <ul
          v-if="isChinese"
          class="list-disc text-gray-50 text-base font-light leading-7 ml-4 md:ml-10"
        >
          <li>
            Demonstrate how WELL features can address regional health risk
            factors.
          </li>
          <li>
            Prioritize WELL features based on available national health data.
          </li>
        </ul>
        <table v-if="isEnglish" class="table-auto w-full mt-4">
          <tbody>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Australia
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Australia-Country-Brief.pdf
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Australia.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Brazil
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Brazil-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Brazil.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Canada
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Canada-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Canada.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                China
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/China-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/China.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                France
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/France-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/France.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                High SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/High-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/High-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                High-Middle SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/High-Middle-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/High-Middle-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                India
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/India-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/India.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Italy
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Italy-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Italy.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Japan
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Japan-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Japan.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Low SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Low-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Low-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Low-Middle SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Low-Middle-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Low-Middle-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Mexico
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Mexico-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Mexico.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Middle SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Middle-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Middle-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Netherlands
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/The-Netherlands-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Netherlands.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                New Zealand
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/New-Zealand-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/New-Zealand.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Singapore
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Singapore-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Singapore.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Spain
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Spain-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Spain.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Sweden
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Sweden-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Sweden.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                UAE
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/UAE-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/UAE.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                United Kingdom
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/United-Kingdom-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/UK.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                United States
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/US-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/US.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <table v-if="isChinese" class="table-auto w-full mt-4">
          <tbody>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                澳大利亚
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Australia-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Australia.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                巴西
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Brazil-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Brazil.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                加拿大
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Canada-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Canada.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                中国
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/China-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/China.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                法国
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/France-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/France.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                High SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/High-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/High-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                High-Middle SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/High-Middle-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/High-Middle-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                印度
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/India-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/India.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                意大利
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Italy-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Italy.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                日本
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Japan-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Japan.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Low SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Low-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Low-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Low-Middle SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Low-Middle-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Low-Middle-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                墨西哥
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Mexico-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Mexico.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                Middle SDI Countries
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Middle-SDI-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Middle-SDI.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                荷兰
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/The-Netherlands-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Netherlands.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                新西兰
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/New-Zealand-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/New-Zealand.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                新加坡
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Singapore-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Singapore.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                西班牙
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Spain-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Spain.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                瑞典
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/Sweden-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/Sweden.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                阿联酋
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/UAE-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/UAE.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                英国
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/United-Kingdom-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/UK.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
            <tr class="hover:bg-gray-400">
              <td
                class="px-2 py-1 text-base text-gray-50 leading-7 font-normal"
              >
                美国
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/US-Country-Brief.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Country Brief</a
                >
              </td>
              <td>
                <a
                  class="text-sm font-light leading-6 text-blue-1700 hover:text-blue-1200 inline-flex"
                  href="https://cdn.wellcertified.com/resources/risk-linkages/feature-rankings/US.pdf"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    /></svg
                  >&#160;Feature Ranking</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'default',
  computed: {
    isEnglish() {
      return this.$i18n.locale === 'en'
    },
    isChinese() {
      return this.$i18n.locale === 'cn'
    },
  },
}
</script>
<style scoped>
@layer base {
  >>> table > tbody > tr:hover {
     {
      background: #000000;
      opacity: 0;
    }
  }
}
</style>
