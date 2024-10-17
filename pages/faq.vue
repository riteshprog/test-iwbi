<template>
  <div class="bg-gray-1500">
    <div class="flex flex-col items-center justify-center">
      <img
        style="width: 200px; margin-top: 50px"
        src="~/static/images/faq.png"
      />
      <h1
        class="
          pt-5
          text-40 text-gray-50
          leading-11
          font-medium
          text-center
          font-museo-slab
        "
      >
        Frequently Asked Questions
      </h1>
    </div>
    <section class="pt-8 m-4 pb-10">
      <div class="max-w-4xl mx-auto md:px-4">
        <div class="md:flex">
          <div class="md:w-1/4 mr-2">
            <WButtonsBase
              :type="
                currentTab === 'Overview' ? 'primary2' : 'primaryInverted1'
              "
              @click.native="currentTab = 'Overview'"
            >
              Overview
            </WButtonsBase>
            <WButtonsBase
              :type="
                currentTab === 'Whats New' ? 'primary2' : 'primaryInverted1'
              "
              @click.native="currentTab = 'Whats New'"
            >
              What's New
            </WButtonsBase>
            <WButtonsBase
              :type="
                currentTab === 'Documentation and PV'
                  ? 'primary2'
                  : 'primaryInverted1'
              "
              @click.native="currentTab = 'Documentation and PV'"
            >
              Documentation and PV
            </WButtonsBase>
            <WButtonsBase
              :type="
                currentTab === 'Registration' ? 'primary2' : 'primaryInverted1'
              "
              @click.native="currentTab = 'Registration'"
            >
              Registration
            </WButtonsBase>
            <WButtonsBase
              :type="currentTab === 'Pricing' ? 'primary2' : 'primaryInverted1'"
              @click.native="currentTab = 'Pricing'"
            >
              Pricing
            </WButtonsBase>
            <WButtonsBase
              :type="currentTab === 'WELL AP' ? 'primary2' : 'primaryInverted1'"
              @click.native="currentTab = 'WELL AP'"
            >
              WELL AP
            </WButtonsBase>
          </div>
          <div class="md:w-3/4">
            <div :class="{ hidden: currentTab !== 'Overview' }">
              <div class="px-4 md:py-0">
                <h4 class="text-primary-1300 font-medium leading-7 text-2xl">
                  Overview
                </h4>
                <div>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What is WELL v2™?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          WELL v2 represents a new paradigm for supporting and
                          advancing human health through better buildings.
                          Launched as a pilot on May 31, 2018, this next version
                          of the WELL Building StandardTM was created by the
                          International WELL Building Institute™ (IWBI™) in
                          collaboration with our global community of WELL users
                          and experts. WELL v2 incorporates key learnings from
                          nearly 1,000 WELL projects, and reflects current
                          health research and data that we’ve amassed since its
                          launch in late 2014.
                        </p>
                        <p>
                          We’ve introduced a suite of enhancements in WELL v2
                          that is aimed at making WELL more flexible, inclusive
                          and optimized for all types of projects in every part
                          of the world. Backed by a reimagined digital platform
                          for WELL project management complete with
                          comprehensive resources and support, WELL v2 features
                          a user experience that is designed to be seamless,
                          intuitive and enjoyable. Additionally, the WELL v2
                          pricing structure is simpler and more adaptable to
                          project needs.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass=" hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What was the development process for WELL v2?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          We started by listening to the passionate WELL
                          community: the WELL APs, WELL project teams, owners,
                          developers and other advocates who have embraced the
                          WELL framework and contributed to its evolution and
                          global uptake. WELL v2 reflects what we’ve heard: the
                          need for a simplified, agile, customizable, global and
                          powerful vehicle to advance human health in buildings.
                        </p>
                        <p>
                          The growing WELL community contributed to hundreds of
                          alternative adherence paths (AAPs) and other
                          enhancements in WELL v1 geared toward helping projects
                          achieve their goals. We took this a step further in
                          our WELL v2 development process: over the course of
                          the last year, we convened a series of nine in-person,
                          global roundtables where we invited WELL APs and WELL
                          users to share details about their experiences to
                          date, voice hopes for the future and directly inform
                          our plans for the next version of WELL. Throughout
                          that process, we heard from representatives from more
                          than 190 organizations based in over a dozen
                          countries. These diverse perspectives, taken together,
                          have shaped the foundation of WELL v2.
                        </p>
                        <p>
                          After completing the new set of WELL v2 features, the
                          IWBI team shared them with a representative group of
                          250+ customers, partners and experts in March 2018. We
                          pored over every piece of feedback in this final round
                          of review prior to the public launch, and made a
                          variety of further adjustments and clarifications to
                          the final content as well as the usability of the
                          digital portal where our community can access WELL v2,
                          register and work on projects.
                        </p>
                        <p>
                          We also combined what we heard on the ground with an
                          extensive research and evidence review process. WELL
                          v2 was developed by integrating scientific and medical
                          research and literature on environmental health,
                          behavioral factors, health outcomes and demographic
                          risk factors that affect health with leading practices
                          in building design and management. It also references
                          existing standards and best practice guidelines set by
                          governmental and professional organizations.
                        </p>
                        <p>
                          We are deeply grateful to our engaged network of WELL
                          customers and champions who have shared their
                          expertise and perspectives and remain committed to
                          working alongside the IWBI team to advance health
                          through better buildings.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How long will WELL v2 remain in pilot? How long will
                          WELL v1 be available for registration?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Our intention in launching WELL v2 in pilot form is to
                          assess community uptake and feedback for a given
                          period of time. In keeping with the spirit of a pilot
                          or “beta” launch, we have not yet determined how long
                          this pilot period will last: that will depend upon the
                          pace at which we see projects of different types from
                          different parts of the world successfully achieve
                          certification.
                        </p>
                        <p>
                          Projects may register for either WELL v2 or WELL v1 at
                          this time. After we move WELL v2 out of pilot, WELL v1
                          will remain open for registration for a period of
                          time. We will give project teams plenty of advance
                          notice before we close registration for WELL v1.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Why should I register my project for WELL early on?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Projects receive the following benefits immediately
                          following registration. Take advantage by registering
                          early:
                        </p>
                        <ul class="list-disc ml-8">
                          <li>PR/marketing permissions and support</li>
                          <li>
                            Access to a WELL coaching contact, your singular
                            point of contact at IWBI and a technical expert in
                            WELL
                          </li>
                          <li>
                            Use of the optimized WELL digital portal for
                            comprehensive management of your WELL projects
                          </li>
                          <li>
                            Ability to submit AAPs and equivalencies, and upload
                            documentation
                          </li>
                        </ul>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                </div>
              </div>
            </div>
            <div :class="{ hidden: currentTab !== 'Whats New' }">
              <div class="px-4">
                <h4 class="text-primary-1300 font-medium leading-7 text-2xl">
                  What’s new in WELL v2?
                </h4>
                <div>
                  <LazyAccordiansBase
                    headerclass=" hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How does WELL v2 take a more unified approach for all
                          projects?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          <strong>One WELL, for all project types. </strong>WELL
                          v2 is designed to be applied by all buildings,
                          streamlining and unifying several existing pilot
                          programs (multifamily residential, commercial kitchen,
                          retail, education facilities and restaurants) and
                          remaining flexible enough to accommodate novel project
                          types. Building upon the pathways that WELL v1
                          currently offers through alternative adherence paths,
                          equivalencies and the “all projects in” program, WELL
                          v2 makes flexibility native to the standard itself.
                          All projects leverage a universal set of preconditions
                          and an expansive library of optimizations that can be
                          applied to many different building types by
                          incorporating different pathways and thresholds for
                          achievement. We look forward to collaborating with
                          WELL users of all project types to build new pathways
                          and parts into this infrastructure as WELL evolves.
                        </p>
                        <p>
                          <strong>Existing buildings. </strong>The IWBI team
                          crafted the WELL v2 feature set with a specific focus
                          on feasibility for existing buildings and commercial
                          interiors. We set a goal that all well -intentioned
                          projects would be able to meet the preconditions
                          without major capital expenditures. And we added new
                          features and pathways that address building operations
                          and maintenance as well as organizational policies and
                          programs that have a significant impact on the health
                          and wellness outcomes that are fundamental to WELL.
                        </p>
                        <p>
                          <strong>WELL Core. </strong>The next version of WELL
                          also adds more value for WELL Core projects (known as
                          Core & Shell in WELL v1) across all building sectors.
                          One of our key objectives for WELL Core is to motivate
                          and support tenants in their own pursuit of health and
                          wellness strategies. We want to help owners do more on
                          behalf of their tenants and ensure that improvements
                          addressing health and wellness are readily
                          transferable to tenants seeking WELL Certification.
                          For these reasons, in WELL v2, WELL Core will become
                          the new base level of certification. Projects can
                          achieve WELL Certified Core at 40 points, with the
                          option to pursue additional points in order to achieve
                          WELL Certified Core Silver, WELL Certified Core Gold,
                          and WELL Certified Core Platinum.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass=" hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What types of buildings can take advantage of WELL
                          Core?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          All building types can pursue WELL Core certification
                          provided that at least 75% of the project area is
                          occupied by one or more tenants or serves as common
                          space in the building accessible to all tenants. Note
                          that offices affiliated with the project owner but
                          unrelated to the management of the project property
                          may be considered a tenant so long as there is at
                          least one additional tenant unaffiliated with the
                          project owner.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How has WELL become more localized for markets around
                          the world?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Through close collaboration with technical experts
                          around the world, our goal is to build pathways into
                          WELL that represent local perspectives. The digital
                          platform that powers WELL v2 will proactively suggest
                          equivalencies and regionally appropriate pathways for
                          meeting health intents based on where projects are
                          located. We’ve revamped the statistics and feature
                          requirements throughout WELL v2 to improve global
                          relevancy and have begun work to identify the most
                          pressing health issues in different geographies around
                          the world to ensure we can continuously adapt WELL to
                          address local opportunities and imperatives. This
                          work, along with translation of the content into
                          languages relevant to our top markets, is already
                          underway and will be released on a rolling basis.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Why have the seven concepts in WELL v1 expanded to 10
                          concepts in WELL v2?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          The next version of WELL expands the seven concepts
                          that make up WELL v1 to more clearly highlight and
                          differentiate WELL’s range of approaches to advancing
                          human health in the spaces where we live, work, learn
                          and play. This approach allows us to better
                          acknowledge significant aspects of health that have
                          always been a part of WELL.
                        </p>
                        <p>
                          We have expanded the original seven concepts (Air,
                          Water, Nourishment, Light, Fitness, Comfort and Mind)
                          to 10 concepts: Air, Water, Nourishment, Light,
                          Movement, Thermal Comfort, Sound, Materials, Mind and
                          Community.
                        </p>
                        <ul class="list-disc ml-8">
                          <li>
                            The original Comfort concept has been broken out
                            into Thermal Comfort and Sound. Features pertaining
                            to ergonomics have been incorporated into the
                            Movement concept (known as Fitness in WELL v1)
                            throughout the framework.
                          </li>
                          <li>
                            Materials has been separated out from the original
                            Air and Mind concepts.
                          </li>
                          <li>
                            Community is a new concept we’re introducing that
                            emphasizes equity, social cohesion and engagement.
                            The WELL Community Standard will remain a separate
                            district-scale tool.
                          </li>
                        </ul>
                        <p>
                          <strong>Numbering:</strong> You’ll also notice that
                          features are numbered, starting at one, within each
                          concept and given a concept-specific code. This
                          reflects a strong preference expressed by our users to
                          organize and number features for easy reference.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How has the scoring system changed?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          <strong
                            >Reduced number of preconditions for optimum
                            flexibility. </strong
                          >We’ve reduced the number of preconditions required
                          for certification by half to remove barriers to entry
                          for diverse project types, resulting in a set of
                          preconditions that we believe should be achievable for
                          any project type. Fewer preconditions means more
                          flexibility for project teams to focus on
                          optimizations that reflect project wellness goals and
                          interests, without sacrificing the holistic rigor that
                          makes WELL the global market’s premier building
                          standard focused on the health and wellness of people
                          in buildings.
                        </p>
                        <p>
                          <strong
                            >100 possible points based on weighted
                            optimizations. </strong
                          >WELL v2 introduces a 100-point scoring system.
                          Preconditions are mandatory, and therefore do not have
                          point values. Rather, projects achieve points through
                          optimizations, which are weighted by potential for
                          health impact, thus rewarding projects that apply
                          high-impact features (projects must pursue a minimum
                          of 50 points in optimizations to reach WELL Silver).
                        </p>
                        <p>
                          Additionally, parts within optimizations can now be
                          pursued individually. Each part carries a distinct
                          point value and can be used to achieve points towards
                          the maximum points allocated to the optimization.
                          Since WELL is a comprehensive approach to health and
                          well-being, we’ve assigned a minimum number points
                          that must be achieved in each concept to ensure that
                          projects have a balanced impact on the people in each
                          space.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What changes can I expect to see in the features?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          WELL v2 includes a number of feature improvements
                          across all 10 concepts. Case studies and customer
                          feedback demonstrate that WELL is seeding positive
                          outcomes and success across the world. To further
                          increase WELL’s ability to improve human health and
                          well-being, IWBI has revisited and reviewed all
                          features to reflect the latest understanding of health
                          research and the applicability of interventions. A
                          better balance between building-related interventions
                          and wellness programming makes for a more
                          comprehensive approach to health and wellness. IWBI
                          will continue to learn from the research and design
                          communities to incorporate new understandings into an
                          expanded feature library that will grow over time to
                          reflect the latest thinking on how buildings can
                          advance human health.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What does the addition of a “custom scorecard” entail?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Many of the enhancements to WELL v2 come together in
                          the scorecard tool. Upon registration, project teams
                          will be prompted to input their project details within
                          the WELL digital portal. The platform will then
                          produce a recommended custom scorecard based on
                          project parameters, optimizations pursued by other
                          projects, health imperatives where the project is
                          located, and the project’s own priorities. The
                          recommended scorecard is based on the new 100-point
                          structure, with 10 additional points reserved for
                          innovations, and is intended to be a helpful starting
                          point for projects as they’re defining their goals and
                          further tailoring their scorecard. From there, project
                          teams can further customize!
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                </div>
              </div>
            </div>
            <div :class="{ hidden: currentTab !== 'Documentation and PV' }">
              <div class="px-4">
                <h4 class="text-primary-1300 font-medium leading-7 text-2xl">
                  Documentation & performance verification
                </h4>
                <div>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          When will IWBI have sample documentation available for
                          WELL v2 projects?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          The target for the first round of WELL v2 sample
                          documentation is fall 2018.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What is WELL Design & Operations™ (WELL D&O™)?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Our experience with WELL v1 has proved to us that
                          projects should approach the performance verification
                          milestone with patience and adequate preparation in
                          order to be successful. Performance verification is a
                          key component of the WELL process, focused on
                          accountability and benchmarking real-world
                          performance. To encourage projects to take their time
                          prepping for a successful performance review, we have
                          created a new interim designation that can be used for
                          promoting a project’s progress on the way toward WELL
                          Certification. In WELL v2, project teams can now
                          submit for an early phase review by Green Business
                          Certification Inc. (GBCI) and, when successful, earn a
                          designation of WELL Design & Operations (WELL D&O™).
                          The WELL Design & Operations achievement is available
                          to all buildings. While this does not constitute a
                          full certification or qualify for a WELL plaque, it
                          will be a recognizable mark and an official
                          designation of achievement that projects can utilize
                          to communicate an interim achievement in the journey
                          toward WELL Certification.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How has performance verification changed?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          <strong
                            >Improved processes, protocols and equipment. </strong
                          >All WELL v2 projects will benefit from an improved
                          performance verification process, a critical step in
                          ensuring that WELL buildings are performing as
                          intended and an important part of what establishes
                          WELL as the market standard for leadership.
                        </p>
                        <p>
                          <strong>Sophistication and accuracy. </strong>The new
                          version of WELL introduces greater sophistication and
                          accuracy to testing protocols and equipment used in
                          WELL performance verification. We’re also introducing
                          adjustments to testing protocols based on the findings
                          of lab testing conducted on air quality, daylight and
                          electric light, and other environmental parameters.
                        </p>
                        <p>
                          <strong
                            >The opportunity to engage with new marketplace
                            providers. </strong
                          >Performance verification is evolving to be a more
                          seamless process, including a new option for WELL v2
                          project teams to contract with local service
                          providers, called performance testing agents, for
                          onsite performance testing. This summer, GBCI will
                          begin training performance testing agents for this
                          important new role in the certification process.
                          Project teams will have the option of contracting with
                          these providers directly, or engaging with GBCI (as
                          was the case in WELL v1) to complete WELL performance
                          testing on their projects. Fees associated with this
                          step will be contracted directly with the performance
                          testing agent. After completion of the testing step,
                          the performance testing agent will share the results,
                          along with additional information about the process
                          (including equipment types, all raw data collected,
                          photographs of testing locations, etc.) with GBCI.
                          GBCI will then conduct a comprehensive review, called
                          the performance review, of all design and operational
                          documentation, along with raw data from performance
                          tests and results analysis.
                        </p>
                        <p>
                          The combination of the on-site performance testing
                          along with the performance review, constitutes WELL
                          performance verification.
                        </p>
                        <p>
                          Currently, only GBCI performance testing agents can
                          conduct performance testing for WELL v1 projects.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Who can I contract to conduct the necessary onsite
                          performance testing?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Projects will have two options for undertaking onsite
                          performance testing.
                        </p>
                        <ul class="list-disc ml-8">
                          <li>
                            Option 1:
                            <strong
                              >Engage a GBCI performance testing agent.</strong
                            >
                            As IWBI’s integrated third-party service provider,
                            project teams may contract with GBCI (via IWBI) to
                            complete performance testing. Results from the
                            visual inspection and performance testing will be
                            third-party reviewed by the WELL Reviewer assigned
                            to the project by GBCI.
                          </li>
                          <br />
                          <li>
                            Option 2 (WELL v2 projects only):
                            <strong
                              >Engage a GBCI-trained performance testing
                              agent,</strong
                            >
                            an external provider who has been trained by GBCI to
                            conduct onsite performance tests.
                          </li>
                          <ul>
                            <li>
                              Project teams will obtain pricing from and
                              contract directly with the performance testing
                              agent.
                            </li>
                            <li>
                              Results from the visual inspection and performance
                              testing will be third-party reviewed by the WELL
                              Reviewer.
                            </li>
                            <li>
                              GBCI may perform additional quality control on the
                              performance tests through on-site audits.
                            </li>
                          </ul>
                        </ul>
                        <p>
                          GBCI will begin offering trainings for performance
                          testing agents in June 2018. We will share more
                          information on how to browse and select from verified
                          performance testing agents in the coming months.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How does WELL v2 acknowledge continuous monitoring?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          We believe that continuous monitoring, both through
                          sensors to measure building performance, as well as
                          surveys to assess the human experience, is the next
                          step in the advancement of healthy, high-performing
                          buildings. WELL v2 asks the market to take incremental
                          steps toward this goal of understanding real-time
                          building performance through the collection and
                          reporting of performance data. For measured
                          environmental parameters, WELL v2 projects must
                          provide annual submissions through the digital WELL
                          platform. Our aspiration is to prepare the market for
                          a future state in which buildings and people can be in
                          direct dialogue, in real-time. For ongoing monitoring,
                          WELL v2 projects may use available consumer-grade
                          products. Projects that contract with GBCI-trained
                          performance testing agents can utilize the results for
                          purposes of recertification.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                </div>
              </div>
            </div>
            <div :class="{ hidden: currentTab !== 'Registration' }">
              <div class="px-4">
                <h4 class="text-primary-1300 font-medium leading-7 text-2xl">
                  Registration with WELL v2: Options for new and registered
                  projects
                </h4>
                <div>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          I’m planning to register a new WELL project. Do I have
                          to register my project under WELL v2?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Currently, you can pursue registration under WELL v1
                          or WELL v2 depending on your project goals and
                          preferences.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          I’m already registered under WELL v1. What are my
                          options?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Projects currently registered for WELL v1 may upgrade
                          to WELL v2 at no additional cost, up until the point
                          of submission for documentation review. The project
                          would receive WELL v2 pricing for subsequent invoices;
                          registration fees already paid under WELL v1 would not
                          be altered or refunded.
                        </p>
                        <p>
                          If your project is in the documentation review phase,
                          it may still be possible to utilize the new version of
                          WELL. We are happy to help facilitate a change if it
                          helps the project team achieve their certification
                          goals, but note that there may be additional fees to
                          review documentation or conduct additional on-site
                          testing.
                        </p>
                        <p>
                          A project can stay within the WELL v1 framework and,
                          for certain features that are similar across the
                          systems, utilize feature language in WELL v2 to
                          comply. The decision to use WELL v2 feature language
                          instead of WELL v1 feature language must be made prior
                          to submission for documentation review. Your WELL
                          coaching contact can provide you with resources to
                          help you in this area.
                        </p>
                        <p>
                          In the coming weeks, IWBI will release additional
                          tools to support projects evaluating WELL v1 and WELL
                          v2. These tools will identify when projects can
                          utilize feature language in WELL v2 to comply with
                          WELL v1, including
                        </p>
                        <ul class="list-disc ml-8">
                          <li>
                            Which features and feature parts from WELL v2 can be
                            utilized as innovations in v1.
                          </li>
                          <li>
                            Where additional feature compliance paths in v2 can
                            be utilized in v1.
                          </li>
                        </ul>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Will my project have to sign a new certification
                          agreement if we upgrade from WELL v1 to WELL v2?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Projects that update from WELL v1 to WELL v2 do not
                          need to sign a new certification agreement since there
                          is no substantive change to legal terms. Instead,
                          projects will receive “notice” confirming the switch
                          and link to information about the WELL v2
                          certification fees.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How do I determine if WELL v2 is the right fit for
                          registering or upgrading my project?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          WELL v2 may help some projects overcome items they
                          perceived as obstacles in WELL v1, such as design
                          criteria and performance levels. The features of WELL
                          v1 serve as the foundation of this next version, but
                          WELL v2 introduces more flexibility in how projects
                          can pursue and achieve features on the whole.
                        </p>
                        <p>
                          Projects can reference the
                          <a
                            href="https://www.wellcertified.com/en/resources/well-v1-v2-comparison"
                            target="_blank"
                            >WELL v1 to v2 comparison tool</a
                          >
                          and this
                          <a
                            href="https://www.wellcertified.com/en/articles/well-tip-understanding-comparison-between-well-v1-and-well-v2-pilot"
                            target="_blank"
                            >article</a
                          >
                          to understand the comparison between WELL v1 and WELL
                          v2.
                        </p>
                        <p>Overall, some of the benefits of WELL v2 include:</p>
                        <ul class="list-disc ml-8">
                          <li>
                            A new feature set, fewer preconditions and weighted
                            optimizations
                          </li>
                          <li>
                            A focus on localization and identification of
                            compliance pathways that align with regional codes
                            and standards
                          </li>
                          <li>
                            The introduction of a dynamic scorecard for a more
                            customized project scope
                          </li>
                          <li>
                            A consolidation of multiple pilots into one WELL,
                            and improvements to the “all projects in” approach
                          </li>
                          <li>
                            An optional early phase review for projects wishing
                            to earn the WELL Design & Operations designation
                            that affirms and celebrates progress toward WELL
                            Certification
                          </li>
                          <li>
                            A new approach to performance verification allowing
                            projects to contract local providers
                          </li>
                          <li>
                            Significant adjustments to certification fees,
                            including a new subscription option
                          </li>
                          <li>
                            A commitment to equity through market- and
                            sector-specific pricing
                          </li>
                        </ul>
                        <p>
                          Project teams may assess the feasibility of WELL v1
                          and WELL v2 by considering how their project scenario
                          aligns with the following:
                        </p>
                        <ul class="list-disc ml-8">
                          <li>The precondition requirements in both systems</li>
                          <li>Projected certification level in both systems</li>
                          <li>
                            The features in both systems align with project
                            goals
                          </li>
                          <li>
                            How the features and certification costs in both
                            systems impact capital expenditure
                          </li>
                          <li>
                            Resources and tools available for both systems (WELL
                            v1 has several
                            <a
                              href="https://www.wellcertified.com/en/resources"
                              blank="_blank"
                              >resources</a
                            >
                            that are not yet available for v2, including sample
                            documentation, crosswalks with other rating systems,
                            technical feature-specific FAQs that are available
                            on the digital standard, etc.)
                          </li>
                        </ul>
                        <p>
                          Project teams may consider the following when
                          evaluating whether to upgrade from WELL v1 to WELL v2:
                        </p>
                        <ul class="list-disc ml-8">
                          <li>
                            How many changes would need to be made, based on
                            your scorecard? Are those changes still feasible
                            based on your design/construction timeline?
                          </li>
                          <li>
                            Are there issues with meeting the precondition
                            requirements in one of the systems?
                          </li>
                          <li>
                            Can you achieve a higher certification level in one
                            of the systems based on your project scenario?
                          </li>
                          <li>
                            Is capital investment more favorable in one of the
                            systems?
                          </li>
                          <li>
                            WELL v1 has several resources that are not yet
                            available for WELL v2, including sample
                            documentation, crosswalks with other rating systems,
                            technical feature-specific FAQs that are available
                            on the digital standard, etc. If the availability of
                            one or more of those resources is critical to your
                            team in the short term, staying in WELL v1 could be
                            a good option for you.
                          </li>
                        </ul>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          If my project remains registered under WELL v1, which
                          version of the Performance Verification Guidebook are
                          we required to use?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          If a project has already registered for WELL but has
                          not scheduled performance testing, then GBCI will
                          evaluate based on the latest version of the WELL
                          Performance Verification Guidebook. Your WELL coaching
                          contact can support in answering any questions about
                          this.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How does WELL v2 impact my approach to
                          recertification?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Projects certified under WELL v1 can recertify under
                          WELL v1 or under the WELL v2 pilot. WELL v1 will be
                          available through the duration of the WELL v2 pilot.
                          For subsequent recertifications, a project will be
                          reviewed under the non-pilot version of WELL that is
                          in place 12 months prior to the expiration of the
                          project’s certification. A project still has the
                          option to recertify under a more recent version,
                          including a pilot. See the WELL Certification
                          Guidebook section on recertification requirements for
                          more information.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                </div>
              </div>
            </div>
            <div :class="{ hidden: currentTab !== 'Pricing' }">
              <div class="px-4">
                <h4 class="text-primary-1300 font-medium leading-7 text-2xl">
                  Pricing
                </h4>
                <div>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What are my options for payment under WELL v2?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          <strong>Single Cycle:</strong> The single-cycle
                          payment opportunity is most closely aligned to WELL v1
                          pricing for a fee that is guaranteed as long as the
                          project submits documentation within two years of
                          registering, and recertification will incur additional
                          fees that will be approximately 30% of the original
                          certification fees.
                        </p>
                        <p>
                          <strong>Subscription:</strong> Because we view WELL as
                          a journey, we are excited to offer a new subscription
                          option with WELL v2. The subscription can be prepaid
                          or paid on an annual basis, giving customers the
                          ability to integrate WELL fees within their annual
                          budget and distribute them over time. The project’s
                          annual fee will not increase during the term of the
                          subscription. Subscribers have no deadline for
                          documentation submission so long as their subscription
                          is active. They will also receive 10 complimentary
                          AAPs annually and a 35% discount on WELL AP
                          registrations for up to 10 members of the project
                          team. Projects will still recertify every three years
                          and the fees are included in the subscription.
                          Subscribers can re-submit for additional earned points
                          or a higher level of certification at any time within
                          a 12-month period prior to recertification for no
                          additional cost.
                        </p>
                        <p>
                          The subscription option is currently only available to
                          WELL v2 projects.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Are there discounts available?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          <strong>Expanded pricing equity:</strong> For projects
                          in countries defined as lower-middle- and low-income
                          countries according to the Atlas Method, an indicator
                          of income developed by the World Bank, we’re pleased
                          to extend a 35% discount on registration and
                          certification fees. We’re also introducing discounted
                          sector-specific pricing for education, non-profits and
                          affordable housing, along with government agency
                          facilities.
                        </p>
                        <p>
                          <strong>Support for WELL Core:</strong> WELL Core
                          projects, except for multifamily residential projects
                          pursuing WELL Core Certification, pay lower fees as do
                          tenants in buildings that have achieved WELL Core.
                        </p>
                        <p>
                          <strong
                            >Recognizing WELL Certified v1 projects:</strong
                          >
                        </p>
                        <ul class="list-disc ml-8">
                          <li>
                            Project owners who have completed certification for
                            projects under WELL v1 will receive a 25% discount
                            off WELL v2 pricing for the same number of projects
                            they certify under WELL v1. This discount will be
                            honored across all fees, including registration, for
                            either subscription or single-cycle. To qualify,
                            WELL v1 projects must be certified by Nov. 30, 2018,
                            and WELL v2 projects must be registered by Jan. 31,
                            2019.
                          </li>
                        </ul>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What prompted the pricing updates in WELL v2?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Through our work in developing WELL v2, we’ve been
                          looking at all the ways we can improve efficiencies
                          throughout the process and pass the benefits of those
                          efficiencies onto the marketplace in the form of a
                          more accommodating pricing structure. The new pricing
                          takes advantage of the refined certification process
                          and associated efficiencies.
                        </p>
                        <p>
                          While this has included a focus on efficiencies for
                          both performance verification and larger buildings,
                          all WELL projects will benefit. Together, these
                          improvements represent a critical step in ensuring
                          that WELL buildings are performing as intended and
                          uphold WELL’s reputation as the leading market tool.
                        </p>
                        <p>
                          Our intention is that the pricing for WELL v2 mirrors
                          our intentions related to WELL itself. WELL v2 pricing
                          is intended to be simpler (less variability across
                          program types), more flexible (multiple options for
                          payment terms) and more accommodating (particularly
                          for developing markets and specific building sectors).
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Does WELL v2 pricing include the cost of onsite
                          performance testing?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          No, fees for onsite performance testing are separate
                          and not included in the WELL Certification fees for
                          WELL v2 projects. Project teams can elect to have GBCI
                          complete onsite performance testing or select their
                          own GBCI trained performance testing agent and
                          contract with them separately. As the market engages
                          in onsite performance testing, the industry will find
                          efficiencies in the process towards increased
                          scalability, thereby making WELL Certification more
                          accessible and affordable to projects globally.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Why is IWBI offering a subscription option?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Designing, constructing and operating a building that
                          advances and supports human health is a journey and
                          not a destination. The subscription is designed for
                          project teams that are committed to continuous
                          improvement and want to be recognized for ongoing,
                          incremental achievements.
                        </p>
                        <p>
                          This new subscription model aligns with the proactive
                          and intentional steps we are taking toward continuous
                          monitoring and establishing a real-time dialog between
                          buildings and people. Subscription also provides
                          customers with a new option, giving our customers the
                          flexibility to align the pricing construct with their
                          project goals, needs and annual budgets.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          What else do I get with my subscription contract,
                          beyond what’s included in the single-cycle fees?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Subscribers will receive the following benefits, in
                          addition to the benefits included in the single-cycle
                          pricing option:
                        </p>
                        <ul>
                          <li>During the journey to WELL Certification</li>
                          <ul>
                            <li>
                              Lower registration fees and the ability to pre-pay
                              subscription fees or space them out over three or
                              five years.
                            </li>
                            <li>
                              No deadlines for documentation submission, so long
                              as the subscription is active.
                            </li>
                            <li>Ten complimentary AAPs annually.</li>
                          </ul>
                          <li>After WELL Certification</li>
                          <ul>
                            <li>
                              Recertification fees (excluding any necessary
                              performance testing)
                            </li>
                            <li>
                              Ongoing WELL coaching support, post-certification,
                              leading to recertification
                            </li>
                            <li>
                              Once a project has achieved certification, project
                              teams have the option of submitting for one
                              incremental review within any 12-month period.
                              During this partial review, project teams can
                              apply for new features or feature parts to
                              increase their overall score (and certification
                              level) and have certification caps removed.
                            </li>
                          </ul>
                          <li>Ongoing</li>
                          <ul>
                            <li>
                              Ability to integrate WELL fees within annual
                              budget.
                            </li>
                            <li>
                              Guarantee that your annual fee will not go up
                              during the term of subscription. (This gives a
                              longer price guarantee than single-cycle, which is
                              guaranteed for two years as long as the project
                              submits documentation two years following
                              registration.)
                            </li>
                            <li>
                              WELL AP discounts of 35% off list price for up to
                              10 project team members (as listed on the
                              project’s WELL digital platform) per subscription
                              contract. If an individual qualifies for multiple
                              discounts, note that discounts cannot be combined.
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How do I determine the size of my project when
                          generating a price quote or creating a scorecard?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          The gross square footage entered for the project
                          should include the sum of the floor areas of the
                          spaces within the building including, as applicable,
                          basements, mezzanine and intermediate-floored tiers,
                          and penthouses with headroom height of 7.5 ft or
                          greater. Measurements must be taken from the exterior
                          faces of the exterior walls OR from the centerline of
                          walls separating buildings. The gross square footage
                          should exclude non-enclosed (or non- enclosable)
                          roofed-over areas such as exterior covered walkways,
                          porches, terraces or steps, roof overhangs and similar
                          features. It should also exclude air shafts, pipe
                          trenches, chimneys and floor area dedicated to the
                          parking and circulation of motor vehicles.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                </div>
              </div>
            </div>
            <div :class="{ hidden: currentTab !== 'WELL AP' }">
              <div class="px-4">
                <h4 class="text-primary-1300 font-medium leading-7 text-2xl">
                  WELL APs and WELL AP exams
                </h4>
                <div>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          How does the launch of WELL v2 pilot impact the WELL
                          AP exam? When can I expect changes?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          The WELL v2 pilot will not affect the current version
                          of the WELL AP exam, as a rating system must graduate
                          out of the pilot stage before it’s incorporated into
                          the WELL AP exam. The current version of the exam
                          remains based on WELL v1.
                        </p>
                        <p>
                          This year, the exam will undergo annual maintenance to
                          align it with the WELL v1 Q1 2018 addenda. That
                          version of the exam will launch later this year.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                  <LazyAccordiansBase
                    headerclass="hover:bg-blue-400 border-b border-gray-900"
                    class="mt-4"
                  >
                    <template #header>
                      <div class="flex justify-between">
                        <h4
                          class="
                            font-light
                            text-gray-50 text-base
                            leading-5
                            my-1
                            hover:font-bold
                          "
                        >
                          Will the next version of WELL impact the status or
                          value of my current WELL AP credential?
                        </h4>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-base leading-7 text-gray-50 font-light">
                        <p>
                          Not to worry: the status of your credential will
                          remain the same. You’ll remain a valued WELL AP for as
                          long as you maintain your credential.
                        </p>
                      </div>
                    </template>
                  </LazyAccordiansBase>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      currentTab: 'Overview',
    }
  },
  computed: {
    tabOptions() {
      const options = [
        { name: 'Overview' },
        { name: 'Whats New' },
        { name: 'Documentation and PV' },
        { name: 'Registration' },
        { name: 'Pricing' },
        { name: 'WELL AP' },
      ]
      return options
    },
  },
}
</script>
