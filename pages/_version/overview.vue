<template>
  <div
    v-if="versionDetails"
    class="bg-white overflow-y-auto flex-1 mt-2 md:mt-0 md:mx-4 h-full mb-4"
  >
    <div class="mb-6">
      <div
        class="rounded-lg bg-no-repeat space-x-0 md:space-x-4 flex flex-col sm:block text-sm space-y-2 bg-cover bg-center px-4 md:px-8 py-10"
      >
        <div v-if="versions.type === 'v2-pilot'">
          <div v-if="$i18n.locale === 'en'">
            <h1 class="text-center pb-10 space-y-5 font-museo-slab">
              <strong
                class="font-bold text-center text-40 leading-11 text-tertiary-1200"
                >WELL v2&trade; pilot<br
              /></strong>
              <h2 class="text-lg font-medium text-gray-1400 leading-5">
                The next version of the WELL Building Standard&trade;
              </h2>
            </h1>
            <div>
              <div>
                <h4
                  class="text-2xl mb-4 text-tertiary-1200 leading-6 font-medium"
                >
                  {{ $t('introduction') }}
                </h4>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  As humans, we have always been dependent on our
                  environmentslist-style: auto !important; to nurture and
                  sustain us. We rise with the sun, we eat off the land, we make
                  shelter of stones and trees. We need water, air and light to
                  <em>survive</em>. We need good water, good air and good light
                  to <em>thrive</em>.
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  We build structures to protect ourselves &ndash; from nature
                  and other forces. And we spend increasing amounts of time in
                  these structures, living more than 90% of our lives indoors.
                  Our buildings are designed to keep us safe, to protect us from
                  the elements. But many of the places where we spend our time
                  also get in the way of our health, putting one degree of
                  separation between us and that which has always kept us alive.
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  Nature has long been our caretaker. With intentional design,
                  our buildings can be too.
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  Thanks to an evolving and growing evidence base, we understand
                  more about the relationship between our environments and our
                  health than ever before. We know how to create spaces that
                  enhance, rather than hinder our health and well-being. We can
                  measure- and then improve &ndash; the quality of our air,
                  water and light. We know how to design environments that fuel
                  our bodies, keep us moving, inspire our best work and
                  facilitate a good night's sleep.
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  Through the vehicle of WELL, IWBI helps to translate what we
                  know into what we practice.
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  WELL is premised on a holistic view of health: human health as
                  not only a state of being free of disease - which is indeed a
                  fundamental component of health - but also of the enjoyment of
                  productive lives from which we derive happiness and
                  satisfaction. Healthy spaces protect us from that which can
                  make us sick, promote practices that can keep us well, and
                  facilitate opportunities for us to connect with one another
                  and live our lives to the fullest. &nbsp;
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  We aspire to advance healthy buildings for all. This has been
                  our mission since we launched WELL in 2014, but today we know
                  a lot more about how to achieve it. We've learned alongside
                  our customers, early adopters of the healthy buildings
                  movement and brave pioneers on the frontier of human-centered
                  design. To create this new version of WELL, we did a lot of
                  research and a lot of listening. We tried to channel all that
                  we learned and all that we heard into a product that is more
                  accessible, more adaptable and more equitable, while still
                  anchored by the latest scientific and medical knowledge.
                </p>
                <h4
                  class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                >
                  WELL v2: Equitable, Local, Dynamic
                </h4>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  WELL v2 builds upon the pioneering foundation of WELL v1,
                  drawing from the community of users and practitioners, and
                  from health and building researchers and experts around the
                  world.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  One of our main goals in developing WELL v2 was to drive
                  equity into the very architecture of the standard. We wanted
                  to reduce barriers to entry, while maintaining WELL as a mark
                  of true leadership. We wanted to offer more choice while
                  retaining rigor. We wanted to create a single version of WELL
                  that could evolve to meet the needs of any type of building in
                  any part of the world. We have done this by re-affirming and
                  building upon the scientific evidence base for effective
                  health intervention through built spaces and organizational
                  practices, homing in on the essential elements of what a
                  healthy building
                  <em>must</em> be and introducing new options for what a
                  healthy building <em>could</em> be. All the while, we asked
                  ourselves: could a well-intentioned project achieve this
                  intent? Could an existing building meet our requirements
                  without major capital expenditure? How might a WELL space
                  create equal opportunities for all? How do we ensure that
                  those on the outside benefit as much as those on the inside?
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  WELL is already a global tool being utilized in more than 50
                  countries. In order to make WELL v2 a better fit for people
                  and spaces around the world, we approached the goal of
                  globalization through a strategy of localization; taking into
                  consideration regional health concerns, cultural norms and
                  market realities. This new version of WELL will be regularly
                  and proactively adapted to varying contexts and constructs,
                  making it even more relevant and readily applicable to spaces
                  and places across the globe.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  What makes all of this possible is that WELL v2 is dynamic. We
                  built a system that can continuously learn, evolve and
                  improve. Moving away from a fixed scorecard gives you the
                  opportunity to focus on the outcomes that matter most for your
                  project and your community, and it gives us the opportunity to
                  regularly introduce new pathways and parts to make WELL a
                  better and better fit for all buildings everywhere.
                </p>
                <h4 class="text-2xl mb-4">
                  Powerful Opportunities for Health Promotion
                </h4>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  As designers, engineers, builders, operators and owners of
                  buildings, we too are caretakers.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  We have an obligation to create spaces that move us&mdash;all
                  of us&mdash;in the direction of health.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  Together, we can create spaces that inspire; spaces that are
                  inclusive; spaces that allow us to flourish; spaces that help
                  us become happier and healthier people.&nbsp; With every WELL
                  project comes a powerful opportunity to catalyze our built
                  spaces as mechanisms to deliver health and wellness benefits
                  to all people within them.
                </p>
                <div>
                  <h1
                    class="text-40 leading-10 text-tertiary-1200 text-center py-10 font-medium"
                  >
                    Principles of WELL v2
                  </h1>
                </div>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  The development of WELL v2 is founded on the following
                  principles:
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">Equitable: </strong
                  >Provides the greatest benefit to the greatest number of
                  people, inclusive of all demographic and economic groups and
                  with special consideration of groups of the least advantage or
                  vulnerable populations.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">Global:</strong> Proposes
                  interventions that are feasible, achievable and relevant
                  across many applications throughout the world.&nbsp;&nbsp;
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">Evidence-based:</strong>
                  Undergirded by strong, validated research yielding conclusions
                  that can reasonably be expected to receive acceptance by the
                  scientific community.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7"
                    >Technically robust:</strong
                  >
                  Draws upon industry best practices and proven strategies,
                  offering consistency in findings across the relevant field or
                  discipline.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">Customer-focused:</strong>
                  Defines program requirements through a dynamic process, with
                  multiple opportunities for stakeholder engagement, and by
                  tapping the expertise of established leaders in science,
                  medicine, business, design and operations.
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">Resilient:</strong>
                  Responds to advances in scientific knowledge and technology,
                  continuously adapting and integrating new findings in the
                  field.&nbsp;&nbsp;
                </p>
                <div>
                  <h1
                    class="text-center py-10 font-medium text-40 leading-10 text-tertiary-1200"
                  >
                    The Architecture of the Standard
                  </h1>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    A Unified Standard: One WELL
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL v2 consolidates previous iterations and pilots into one
                    WELL for all project types. The system is designed to grow
                    in specificity and specialty over time, adapting to
                    accommodate diverse project types and geographies and in
                    response to new evidence and ever-evolving public health
                    imperatives.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Dynamic WELL Scorecard
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL Online guides project teams through the development of
                    a unique scorecard. The digital platform recommends a
                    selection of features based on project-specific parameters
                    that can be further defined and refined by the project team.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Ten Concepts
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    There are ten concepts in WELL v2: Air, Water, Nourishment,
                    Light, Movement, Thermal Comfort, Sound, Materials, Mind and
                    Community.
                  </p>
                  <p class="text-base mb-4 font-light">
                    Each concept is comprised of features with distinct health
                    intents. Features are either preconditions or optimizations.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Universal Preconditions
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Preconditions define the fundamental components of a WELL
                    space and serve as the foundation of a healthy building.
                    WELL v2 offers a universal set of preconditions for all
                    projects.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    All preconditions are mandatory for certification. All parts
                    in preconditions are mandatory.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Flexible Optimizations
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Optimizations are optional pathways for projects to
                    demonstrate achievement in WELL.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Project teams choose the optimizations they want to pursue.
                    Further, projects may choose which parts to pursue within
                    optimizations up to the point maximum established for the
                    optimization.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Meaningful Weightings
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL v2 operates on a points-based system, with a total of
                    110 points available to each project. All optimizations have
                    maximum point-values. The point-value of a feature is
                    determined by its potential for impact. This is defined as
                    the extent to which a feature addresses a specific health
                    and wellness concern or opportunity for health promotion,
                    and the potential impact of effective intervention.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    All parts in optimizations hold a point-value equal to or
                    less than the optimization maximum. Projects may pursue
                    parts under the optimization to accrue points up to the
                    maximum point-value established for the optimization. If an
                    optimization contains more parts and points than the
                    maximum, these parts are to provide more options, but
                    projects may still not receive credit for more than the
                    maximum point-value established for the optimization.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Note: for some optimizations, achieving points in one part
                    is contingent upon achieving points for another part.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Accommodating All Space Types
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    All parts of WELL v2 are designated for specific space
                    types. Space types in WELL refer to spaces <em>within</em> a
                    project. These space types do not refer to the project as a
                    whole.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Many parts in WELL are denoted for &ldquo;all spaces&rdquo;,
                    which indicates that the part must be applied to all spaces
                    within the project, for all project types. Some features
                    list distinct parts for specific space types; depending on
                    the part, these additional requirements may be required on
                    top of the requirements for all spaces or used in place of
                    the requirements listed for all other spaces.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    Scoring and Certification Levels
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Projects must achieve all preconditions as well as a certain
                    number of points to earn different levels of certification:
                  </p>
                  <ul
                    class="text-base list-disc mb-4 pl-10 font-light text-tertiary-1100"
                  >
                    <li>WELL Silver Certification: 50 points.</li>
                    <li>WELL Gold Certification: 60 points.</li>
                    <li>WELL Platinum Certification: 80 points.</li>
                  </ul>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Projects must earn a minimum of two points per concept (or
                    in the case of the Air and Thermal Comfort concepts, at
                    least four points combined). Projects may pursue no more
                    than 12 points per concept and no more than 100 points total
                    across the ten concepts. Projects can also pursue an
                    additional ten points for Innovation. At the point of
                    submitting for Documentation Review, projects must submit a
                    scorecard that contains a selection of points and features
                    in accordance with these rules.
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    <a name="WELLCore">WELL Core</a>
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL Core Certification is a distinct pathway of achievement
                    for core and shell buildings seeking to implement
                    fundamental features in the base building for the benefit of
                    tenants/residents. All building types can register for WELL
                    Core provided that at least 75% of the project area is
                    occupied by one or more tenants/residents and/or serves as
                    common space in the building accessible to all
                    tenants/residents. Note that offices affiliated with the
                    project owner but unrelated to the management of the project
                    property may be considered a tenant so long as additional
                    tenants unaffiliated with the project owner occupy at least
                    60% of the gross floor area.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Residential buildings must meet one of the additional
                    requirements to able to register for WELL Core:
                  </p>
                  <ol
                    class="text-base mb-4 pl-10 font-light text-tertiary-1100 list-decimal"
                  >
                    <li>
                      There is minimal fit-out of the dwelling units, defined as
                      meeting at least two of the following:
                      <ol class="list-decimal pl-4 text-sm">
                        <li>Developer does not install kitchen cabinets.</li>
                        <li>
                          Developer does not install stoves/ranges, ovens, or
                          refrigerators.
                        </li>
                        <li>
                          Developer does not install showers/baths, toilets, or
                          sinks in the bathroom or kitchen.
                        </li>
                        <li>Developer does not install HVAC terminals.</li>
                      </ol>
                    </li>
                    <li>
                      Project is unable to provide access to dwelling units for
                      performance testing. Projects must submit evidence
                      attesting to why they are unable to test in dwelling units
                      (for instance, dwelling units are already occupied).
                    </li>
                  </ol>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Mixed-use buildings where WELL Core is appropriate for at
                    least 60% of the gross floor area may register the entire
                    building for WELL Core. Areas operated/occupied by the
                    project owner are considered “non-leased space” (see Scope
                    and Applicability below). Mixed-use buildings where WELL
                    Core is appropriate for less than 60% of the gross floor
                    area should register one or more portions of the building as
                    individual projects for WELL Certification or WELL Core
                    Certification, as appropriate.
                  </p>
                  <h5
                    class="text-xl mb-4 font-medium leading-5 text-tertiary-1200"
                  >
                    Scope
                  </h5>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    At least 2.5% of the total building floor area must be
                    available for performance testing. The available testing
                    area must include all common areas and spaces directly under
                    the control of the building management team. If common areas
                    and spaces under owner control comprise less than 2.5% of
                    total building floor area, the project must supplement with
                    tenant spaces to reach this threshold. Testing in leased
                    spaces in these cases can take place before or after tenant
                    occupancy.
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    Some performance-based optimizations explicitly state that
                    they require testing in tenant spaces in order to be
                    awarded. The project is responsible for identifying and
                    communicating to GBCI and the WELL Performance Testing Agent
                    the particular spaces which are available for testing.
                  </p>
                  <h5
                    class="text-xl mb-4 font-medium leading-5 text-tertiary-1200"
                  >
                    Applicability
                  </h5>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL Core requires, at minimum, achievement of certain
                    features directed at common areas and spaces under owner
                    control. Some features must be achieved for the entire
                    building in order for the WELL Core project to receive
                    credit. WELL Core projects may earn additional points for
                    achieving those same features for tenants/residents, whether
                    by directly offering benefits to tenants or sizing for
                    tenant capacity. Further guidance on applicability and
                    additional point-earning potential for WELL Core is provided
                    in
                    <a
                      class="text-blue-1700 hover:text-blue-1200 text-base leading-6 font-light"
                      href="https://v2.wellcertified.com/v/en/appendix/core-mfr"
                      target="_blank"
                      >Appendix Core and Multifamily Residential</a
                    >.
                  </p>
                  <h5
                    class="text-xl mb-4 font-medium leading-5 text-tertiary-1200"
                  >
                    Certification Levels
                  </h5>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL Core projects must achieve all preconditions as well as
                    a certain number of points to earn different levels of
                    certification:
                  </p>
                  <ul
                    class="text-base list-disc mb-4 pl-10 font-light text-tertiary-1100"
                  >
                    <li>WELL Core Bronze Certification: 40 points.</li>
                    <li>WELL Core Silver Certification: 50 points.</li>
                    <li>WELL Core Gold Certification: 60 points.</li>
                    <li>WELL Core Platinum Certification: 80 points.</li>
                  </ul>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    For WELL Core Certification, projects must earn a minimum of
                    one point per concept. Projects may earn no more than 12
                    points per concept.
                  </p>
                </div>
                <hr class="my-4" />
                <div>
                  <p
                    class="text-base mb-4 font-light text-center text-tertiary-1100"
                  >
                    &copy; 2018 International WELL Building Institute pbc. All
                    rights reserved.
                  </p>
                </div>
                <div>
                  <p class="text-sm font-light text-tertiary-1100">
                    This WELL Building Standard version 2 pilot (&ldquo;WELL
                    v2&rdquo;) constitutes proprietary information of the
                    International WELL Building Institute pbc
                    (IWBI).&nbsp;&nbsp;All information contained herein is
                    provided without warranties of any kind, either express or
                    implied, including but not limited to warranties of the
                    accuracy or completeness of the information or the
                    suitability of the information for any particular purpose.
                    Use of this document in any form implies acceptance of these
                    conditions.
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    IWBI authorizes individual use of WELL v2. In exchange for
                    this authorization, the user agrees:
                  </p>
                  <ol
                    class="text-sm font-light mb-4 text-tertiary-1100 list-decimal"
                  >
                    <li>
                      to retain all copyright and other proprietary notices
                      contained in WELL v2,
                    </li>
                    <li>not to sell or modify WELL v2, and</li>
                    <li>
                      not to reproduce, display or distribute WELL v2 in any way
                      for any public or commercial purpose.
                    </li>
                  </ol>
                  <p class="text-sm font-light text-tertiary-1100">
                    Unauthorized use of WELL v2 violates copyright, trademark
                    and other laws and is prohibited. International WELL
                    Building Institute&trade;, IWBI&trade;, WELL&trade;, the
                    WELL Building Standard&trade;, the WELL Community
                    Standard&trade;, WELL Certified&trade; and others and their
                    related logos are trademarks of the International WELL
                    Building Institute pbc in the US and other countries. All
                    third-party trademarks and Standards referenced herein such
                    as GREEN STAR&trade;, BREEAM&trade;, LEED&trade; and others
                    are trademarks and/or Standards of their respective owners.
                  </p>
                  <h5 class="text-sm font-medium text-tertiary-1200">
                    Disclaimer
                  </h5>
                  <p class="text-sm font-light text-tertiary-1100">
                    None of the parties involved in the funding or creation of
                    WELL v2, including IWBI, or its affiliates, members,
                    employees, or contractors, assume any liability or
                    responsibility to the user or any third parties for the
                    accuracy, completeness, or use of or reliance on any
                    information contained in WELL v2, or for any injuries,
                    losses, or damages (including, without limitation, equitable
                    relief) arising from such use or reliance. Although the
                    information contained in WELL v2 is believed to be reliable
                    and accurate, all materials set forth within are provided
                    without warranties of any kind, either express or implied,
                    including but not limited to warranties of the accuracy or
                    completeness of information or the suitability of the
                    information for any particular purpose. This document and
                    WELL v2 are intended to educate and assist building
                    stakeholders, real estate owners and tenants in their
                    efforts to create healthier spaces and communities, and
                    nothing in this document or in WELL v2 should be considered,
                    or used as a substitute for, quality control, safety
                    analysis, legal compliance (including zoning), comprehensive
                    urban planning, medical advice, diagnosis or treatment.
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    As a condition of use, the user covenants not to sue and
                    agrees to waive and release IWBI, its affiliates, members,
                    employees, or contractors from any and all claims, demands,
                    and causes of action for any injuries, losses or damages
                    (including, without limitation, equitable relief) that the
                    user may now or hereafter have a right to assert against
                    such parties as a result of the use of, or reliance on WELL
                    v2.
                  </p>
                  <h4 class="text-sm mb-4 font-medium text-tertiary-1200">
                    About the WELL Building Standard (WELL&trade;)
                  </h4>
                  <p class="text-sm font-light text-tertiary-1100">
                    Launched in October 2014 after six years of research and
                    development, WELL is the premier Standard for buildings,
                    interior spaces and communities seeking to implement,
                    validate and measure interventions that support and advance
                    human health and wellness.
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    WELL was developed by integrating scientific and medical
                    research and literature on environmental health, behavioral
                    factors, health outcomes and demographic risk factors that
                    affect human health with leading practices in design,
                    operations and management. WELL also references existing
                    standards and best practice guidelines set by governmental
                    and professional organizations.
                  </p>
                  <h4 class="text-sm mb-4 font-medium text-tertiary-1200">
                    About the International WELL Building Institute&trade;
                    (IWBI&trade;)
                  </h4>
                  <p class="text-sm font-light text-tertiary-1100">
                    The International WELL Building Institute (IWBI) is leading
                    the global movement to transform our buildings and
                    communities in ways that help people thrive. IWBI delivers
                    the cutting-edge WELL Building Standard, the first Standard
                    to be focused exclusively on the ways that buildings, and
                    everything in them, can improve our comfort, drive better
                    choices, and generally enhance, not compromise, our health
                    and wellness.
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    IWBI's work extends to advancing health through design for
                    entire neighborhoods through the WELL Community Standard,
                    and convening and mobilizing the wellness community through
                    management of the WELL AP credential.
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    WELL Certification and the WELL AP credentialing program are
                    third-party administered through IWBI's collaboration with
                    Green Business Certification Inc. (GBCI), which also
                    administers LEED certification, the global green building
                    program, and the LEED professional credentialing
                    program.&nbsp;
                  </p>
                  <h4 class="text-sm mb-4 font-medium text-tertiary-1200">
                    Alignment with Green Building Standards
                  </h4>
                  <p class="text-sm font-light text-tertiary-1100">
                    Human health is inextricable from planetary health. WELL is
                    designed to work harmoniously with leading green building
                    Standards. Projects are encouraged and incentivized to
                    pursue dual certifications under WELL and green building
                    Standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h1 class="text-center pb-10 space-y-5">
              <strong
                class="font-bold text-center text-40 leading-11 text-tertiary-1200"
                >WELL 建筑标准v2<sup>&trade;</sup>试行版<br
              /></strong>
              <h2 class="text-lg font-medium text-gray-1400 leading-5">
                WELL建筑标准的下一个晋级版本&trade;
              </h2>
            </h1>
            <div>
              <div>
                <h4
                  class="text-2xl mb-4 text-tertiary-1200 leading-6 font-medium"
                >
                  介绍
                </h4>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  人类一直依赖于环境来获取营养和维系生命。我们日出而作，摄入土地上生长的食物，使用石头和树木建造庇护环境。我们的生存需要水、空气和光线。而我们的蓬勃发展需要良好的水源、良好的空气和良好的光线。
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  人类建造结构来保护自己免受从自然和其他力量的伤害。我们在这些结构中度过的时间越来越长，现在人类90%的时间是在室内度过的。建筑物旨在保证人类的安全，保护我们免受不同元素伤害。但是很多我们长时间生活的地方也妨碍着我们的健康，使人类与维系我们健康的元素间增加了一层隔阂。
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  大自然一直是我们的照护者。而通过用心的设计，我们的建筑也可以扮演这个角色。
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  由于有了不断发展和增长的论证基础，我们比以往更了解环境与人类健康之间的关系。
                  我们知道如何通过打造空间来强化健康而不是阻碍健康。我们可以测量并改善空气、水和光的质量。我们知道如何设计出促进身心健康的环境，让肢体保持活跃，激发我们的最佳工作状态，并改善我们的睡眠质
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  通过WELL，IWBI将我们所了解的知识转化为实践。
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  WELL的前提是对健康的全面认识：人类健康不仅是一种没有疾病的状态
                  –
                  虽然这确实是健康的一个基本组成部分，也是一种能让人获得快乐和满足的高效生活状态。健康的空间可以保护我们免受疾病的困扰，推动人们保持良好状态的实践，并增进人类彼此间的联系，最大程度地充实我们的生活。
                </p>
                <p
                  class="text-base mb-4 font-light leading-7 text-tertiary-1100"
                >
                  我们渴望将健康建筑带入千家万户。自2014年我们推出WELL以来，这一直是我们的使命，而现在我们对于如何实现这一使命有了更深理解。我们与客户、健康建筑运动的早期实践者、以人为本的前沿设计先锋们共同学习和成长。为了制作这个新版本的WELL，我们做了大量的研究和倾听。我们试图将学到的知识和所有听到的信息转化为更易于使用、适应性更强和更公平的产品，同时仍以最新的科学和医学知识为基础。
                </p>
                <h4
                  class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                >
                  WELL v2: 公平、本土、动态
                </h4>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  WELL v2建立在WELL
                  v1的开创性基础之上，结合了用户、实践者、以及来自世界各地的健康和建筑研究人员及专家的意见。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  我们开发WELL
                  v2的主要目标之一是将公平推动到标准的架构中。我们希望降低门槛，同时让WELL保持为一种真正领导力的标志。我们希望在保持严谨的同时提供更多选择。我们想创建一个单一版本的WELL，它可以逐步发展从而满足世界任何地区任何类型建筑的需求。我们通过重申和建立科学的证据基础，通过建筑空间和组织实践进行有效的健康干预，寻找健康建筑必须具备的基本要素，并为健康建筑的可能性引入新选择。一直以来，我们都问自己：一个有良好意愿的项目能达到这个目的吗？没有重大资本支出，现有建筑物能否满足我们的要求？良好的空间如何为所有人创造平等的机会？我们如何确保外部人员和内部人员一样受益？
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  WELL已经是一个在30多个国家使用的全球性工具。为了使WELL
                  v2更适合世界各地的人和空间，我们通过本土化战略实现了全球化的目标;
                  考虑到了区域健康问题、文化规范和市场现实。WELL新版本将定期地、主动地适应不同的环境和构造，使其更适用于全球的空间和场所。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  使所有这些成为可能的原因是：WELL
                  v2是动态的。我们建立了一个可以不断学习、发展和改进的系统。放弃固定计分卡让您有机会把精力放在对您的项目和社区最重要的科目上，并且让我们有机会定期引入新的途径和组成部分，使WELL更好、更适和所有的建筑物。
                </p>
                <h4 class="text-2xl mb-4">推动健康的巨大契机</h4>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  作为设计师、工程师、建筑商、运营商和建筑业主，我们同时也是照护人员。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  我们有义务创造空间，让我们 - 所有人 - 朝着健康的方向前进。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  我们可以共同创造激发灵感的空间、兼容并包的空间、让我们蓬勃发展的空间、有助于我们变得更快乐、更健康的空间。每个WELL项目背后都有一个巨大契机：让建筑空间成为一种载体，推动全体人类的健康。
                </p>
                <div>
                  <h1
                    class="text-40 leading-10 text-tertiary-1200 text-center py-10 font-medium"
                  >
                    WELL的根本原则
                  </h1>
                </div>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  WELL v2的开发是基于以下原则
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">公平性: </strong
                  >为包括所有人口和经济群体在内的最多人提供最大利益，对弱势群体给于特别考量。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">全球性：</strong>
                  提出的干预措施在全世界的多种应用层面都是是可行、可实现和相关的。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">有据可循性：</strong>
                  有强有力的、经过验证的研究作支持。利用这些研究结果得出的结论，基本符合科学界的认可。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">高技术含量性：</strong>
                  借鉴行业最佳实践和行之有效的策略，与相关领域或学科的调查结果有一致性。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">用户至上性:</strong>
                  通过动态的程序来界定标准的内容，为利益相关方的参与提供多种机会，并融入当今科学、医学、商业、设计和运营领域中领导者们的专业知识与意见。
                </p>
                <p class="text-base mb-4 font-light text-tertiary-1100">
                  <strong class="font-bold leading-7">富有适应性</strong>
                  能够响应科学知识和技术的进步，不断调整和整合该领域的新发现。
                </p>
                <div>
                  <h1
                    class="text-center py-10 font-medium text-40 leading-10 text-tertiary-1200"
                  >
                    WELL v2的构架
                  </h1>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    一个统一的标准：一个WELL
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL
                    v2将先前的迭代和试行版整合到了一个适用于所有项目类型的WELL标准中。该系统旨在随着时间的推移逐渐增加其专属性和专业性，适应不同的项目类型和地域，并且因应新的研究发现和不断发展的公共卫生当务之急。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    动态的WELL记分卡
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL
                    Online通过开发独特的记分卡来指导项目团队。该数字平台根据项目特定的参数推荐优化条件的得分条款，项目团队可以根据项目具体情况再进一步定义和完善这些被推荐的优化条款。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    十大概念
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL
                    v2中有十大概念：空气、水、营养、光、运动、热舒适、声环境、材料、精神和社区。
                  </p>
                  <p class="text-base mb-4 font-light">
                    每个概念都包含具有不同健康意图的条款。条款分为先决条件或优化条件。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    通用的先决条件
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    先决条件定义了WELL空间的基本组成部分，并作为健康建筑的基础。WELL
                    v2为所有项目提供了一套通用的先决条件。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    所有先决条件都是认证的必备条件。先决条件中的所有部分都是强制性的。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    灵活的优化条件
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    优化条件是项目为达到WELL标准而选择的的晋级条款。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    项目团队选择他们想要追求的优化条件。此外，项目可以选择用什么样的条款来实现项目的优化得分，直至优化条件的最高点。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    更有意义的权重
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL
                    v2在基于分值的系统上运行，每个项目总共提供110个分值。所有优化条件都有最大的分值。条款的分值取决于其影响潜力。具体定义是指一项条款能在多大程度上解决特定的健康问题或提供促进健康的机会，以及其有效干预的潜在影响。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    优化条件中的所有部分都有其不同的分值，但每个分值都不会超过优化条件的最大分值限度。项目可以选择使用哪些条款的得分部分做优化，以累积达到优化的最大分值。但是，如果项目选择的优化条件累积得分超过了优化条件的最大分值，项目的优化积分仍不能超过优化条件最大分值。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    注意：对于一些优化条件，在一个部分中取得分值可能会受到项目在另一部分取得分值的影响。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    适用所有空间类别
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL
                    v2的所有部分都被指定用于特定的空间类别。WELL中的空间类型是指项目中的功能空间类别。这些空间类型并不代表整个项目的类别。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    WELL中的许多条款下的科目部分都标注为“所有空间类别”，表示该科目部分必须适用于项目中的所有同等功能的空间，并且适用于所有类型项目中具有此一功能的空间。某些条款列出了适用于特定空间类型的科目部分;这要看涉及的是哪些科目
                    -
                    这些科目虽然指定特定空间类别，但可能是在这些科目必须满足所有空间类别的基础上对某一特定空间类别的进一步要求，或用于替代所有其他空间类别所列的要求。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    计分与认证级别
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    项目必须达到所有先决条件和一定数量的分值才能获得不同级别的认证：
                  </p>
                  <ul
                    class="text-base list-disc mb-4 pl-10 font-light text-tertiary-1100"
                  >
                    <li>WELL 认证 - 银级：50 分。</li>
                    <li>WELL 认证 - 金级：60 分。</li>
                    <li>WELL 认证 - 铂金级：80 分。</li>
                  </ul>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    项目在每个概念上至少获得两分。项目在每个概念上的得分不得超过12分。项目可以为其创新获得额外的10分。
                  </p>
                  <h4
                    class="text-2xl mb-4 font-medium leading-6 text-tertiary-1200"
                  >
                    <a name="WELLCore">核心体WELL 认证项目</a>
                  </h4>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    核心体WELL认证以租户/住户的利益为根本，让基本建筑应用基础条款，为核心与外壳建筑实现WELL提供了独特的路径。所有建筑类型都可以注册追求核心体WELL认证，前提是至少
                    75%
                    的项目面积空间则由由一位或多位租户/住户使用，和/或作为建筑内的公用空间供所有租户/住户访问。请注意，与项目业主有关但与项目物业管理无关的办公室可能被视为租户，只要至少有一位其他租户与项目业主无关。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    住宅类建筑必须满足以下额外要求之一，才能注册核心体WELL认证。
                  </p>
                  <ol
                    class="text-base mb-4 pl-10 font-light text-tertiary-1100 list-decimal"
                  >
                    <li>
                      住宅单元的最低装修标准必须满足以下至少两项：
                      <ol type="a">
                        <li>开发商不安装厨房橱柜。</li>
                        <li>开发商不安装炉灶、烤箱和冰箱。</li>
                        <li>
                          开发商不安装厨房或卫生间内的淋浴/浴缸、坐便器/蹲便器和水池。
                        </li>
                        <li>开发商不安装空调末端。</li>
                      </ol>
                    </li>
                    <li>
                      项目无法提供进入住宅单元进行性能测试的权限。项目必须提交证据证明无法在住宅单元内测试的原因（例如，住宅单元已入住）。
                    </li>
                  </ol>

                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    对于混合功能建筑，若核心体WELL认证适用的面积达到总建筑面积的60%或以上，可将整栋建筑注册为核心体WELL认证。由项目业主运营/使用的面积被认定为“非租户区域”（见下文“范围”和“适用性”）。
                    若核心体WELL认证适用的面积不足总建筑面积的60%，应视适用情况，将该建筑的一个或多个部分注册为单独的WELL认证项目或核心体WELL认证项目。
                  </p>
                  <h5
                    class="text-xl mb-4 font-medium leading-5 text-tertiary-1200"
                  >
                    范围
                  </h5>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    如果业主控制下的公共区域和空间不到总建筑面积的
                    2.5%，则该项目必须用住户空间来补足来达到比例要求。在这些情况下，租赁空间的测试可以在租户入住之前或之后进行。一些基于性能的优化条款明确规定，需要在租户空间中进行测试才能满足该优化。项目负责确定可供测试的特定空间，并与
                    GBCI 和 WELL 性能测试代理进行沟通。
                  </p>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    核心体WELL认证项目可以就某些条款的要求为租户/住户赢得分数。业主可以直接把得分需要兑现的福利做出来，也可以预留空间给客户，以便客户未来实现这些条款。我们在线在附录核心体中提供对核心体WELL
                    项目的适用性和额外得分点可能性的进一步指导。
                  </p>
                  <h5
                    class="text-xl mb-4 font-medium leading-5 text-tertiary-1200"
                  >
                    适用性
                  </h5>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    核心体WELL认证项目可以就某些条款的要求为租户/住户赢得分数。业主可以直接把得分需要兑现的福利做出来，也可以预留空间给客户，以便客户未来实现这些条款。我们在线在附录核心体中提供对核心体WELL
                    项目的适用性和额外得分点可能性的进一步指导。
                  </p>
                  <h5
                    class="text-xl mb-4 font-medium leading-5 text-tertiary-1200"
                  >
                    认证等级
                  </h5>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    核心体 WELL
                    项目必须达到所有先决条件和一定数量的分值才能获得不同级别的认证：
                  </p>
                  <ul
                    class="text-base list-disc mb-4 pl-10 font-light text-tertiary-1100"
                  >
                    <li>WELL 核心铜级认证：40 分。</li>
                    <li>核心体WELL 认证 – 银级：50 分。</li>
                    <li>核心体WELL 认证 – 金级：60 分。</li>
                    <li>核心体WELL 认证 – 铂金级：80 分。</li>
                  </ul>
                  <p class="text-base mb-4 font-light text-tertiary-1100">
                    对于核心体WELL
                    认证，项目在每个概念上至少获得一分。项目在每个概念上的得分不得超过12分。
                  </p>
                </div>
                <hr class="my-4" />
                <div>
                  <p
                    class="text-base mb-4 font-light text-center text-tertiary-1100"
                  >
                    &copy; 2018 国际 WELL 建筑研究院PBC版权所有。
                  </p>
                </div>
                <div>
                  <p class="text-sm font-light text-tertiary-1100">
                    WELL 建筑标准v2试行版 (“WELL v2”) 包含国际 WELL
                    建筑研究院PBC (IWBI)
                    的专有信息。本文件中提供的所有材料不附带任何形式的明示或暗示保证，包括但不限于有关信息的准确性或完整性，或者适合某种特定用途的保证。对本文件任何形式的使用即表明了对以上条件的接受。
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    国际WELL建筑研究院PBC授权个人使用WELL v2。但用户应同意：
                  </p>
                  <ol
                    class="text-sm font-light mb-4 text-tertiary-1100 list-decimal"
                  >
                    <li>保留WELL v2中包含的所有版权及其他专有通知，</li>
                    <li>不出售或修改WELL v2，以及</li>
                    <li>
                      不得因任何公共或商业用途而以任何方式复制、展示或分发WELL
                      v2。
                    </li>
                  </ol>
                  <p class="text-sm font-light text-tertiary-1100">
                    未经授权而使用WELL
                    v2均属违反版权、商标及其他法律的行为，应予以禁止。国际 WELL
                    建筑研究院&trade;、IWBI&trade;、WELL&trade;、WELL
                    建筑标准&trade;、WELL 社区标准&trade;、WELL 认证&trade;
                    等标识以及其相关标识是国际 WELL
                    建筑研究院PBC在美国及其他国家的商标。所有在此引用的第三方商标及评估体系，例如：GREEN
                    STAR&trade;, BREEAM&trade;, LEED&trade;
                    等是其各自所有者的商标和/或评分体系。
                  </p>
                  <h5 class="text-sm font-medium text-tertiary-1200">
                    免责声明
                  </h5>
                  <p class="text-sm font-light text-tertiary-1100">
                    参与投资或制定WELL v2的各方，包括 IWBI
                    及其关联公司、会员、员工或承包商，无须就WELL
                    v2中所含任何信息的准确性、完整性，以及对这些信息的使用或依赖，或者因使用或依赖这些信息而导致的任何伤害、损失或损害（包括但不限于公平补偿）对用户或任何第三方承担任何责任或赔偿责任。尽管WELL
                    v2中包含的信息据信为可靠和准确，但这里提供的所有材料未附带任何类型的明示或暗示保证，包括但不限于有关信息的准确性或完整性，或者适合某种特定用途的保证。本文件和WELL
                    v2旨在培训并协助房地产业主和租户努力打造更健康的空间和社区，本文件或WELL
                    v2中的任何内容均不应被视为或用于替代质量控制、安全分析、法律合规（包括区划）、全面的城市规划、医疗建议、诊断或治疗。
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    作为使用条件，用户须承诺，如因使用或依赖WELL
                    v2而导致用户现在或今后因任何伤害、损失或损害（包括但不限于公平补偿）而有权提起任何和全部索赔、要求和诉讼的事由，用户不得提出诉讼，并且同意
                    IWBI 及其关联公司、会员、员工或承包商无须承担相关责任。
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    WELL V2的中英文版本如有出入，以英文版为准。
                  </p>
                  <h4 class="text-sm mb-4 font-medium text-tertiary-1200">
                    关于WELL 建筑标准 (WELL&trade;)
                  </h4>
                  <p class="text-sm font-light text-tertiary-1100">
                    历经六年的潜心研发，WELL于2014年10月推出。它是建筑、室内空间和社区的先进的评估体系，旨在实施、验证和衡量那些支持和促进人体健康的干预性措施。
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    WELL的开发整合了关于环境健康、行为因素、健康效应、以及影响人类健康的人口风险因素的科学和医学研究与文献，同时结合了设计、运营和管理方面的领先实践。WELL也参考了政府和专业组织制定的现有标准和最佳实践指南。
                  </p>
                  <h4 class="text-sm mb-4 font-medium text-tertiary-1200">
                    关于国际 WELL 建筑研究院&trade; (IWBI&trade;)
                  </h4>
                  <p class="text-sm font-light text-tertiary-1100">
                    国际WELL建筑研究院(IWBI)正引领着一场全球运动：一场以帮助人体更茁壮健康为目的来改造我们的建筑和社区形态的运动。IWBI提供顶尖的WELL
                    建筑标准，它是第一个专注于建筑及其中所有因素如何提高人体舒适度、推动我们做出更好选择、以及总体上加强而非损害我们健康的评估体系。
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    运用WELL
                    社区标准，IWBI的工作也延伸至了对整个社区的建设，并且通过管理以及通过对
                    WELL AP资格的管理，召集并动员起健康人群社区。
                  </p>
                  <p class="text-sm font-light text-tertiary-1100">
                    WELL 认证及 WELL AP 资格项目由IWBI与Green Business
                    Certification Inc.
                    (简称GBCI)共同合作管理，GBCI同时也管理着全球绿色建筑的LEED
                    认证项目、以及LEED 专业人士的证书与资格认定项目。
                  </p>
                  <h4 class="text-sm mb-4 font-medium text-tertiary-1200">
                    与绿色建筑评估体系的契合
                  </h4>
                  <p class="text-sm font-light text-tertiary-1100">
                    人类健康与地球健康密不可分。WELL旨在与领先的绿色建筑评级系统协同工作。鼓励并激励项目追求WELL和绿色建筑评估体统的双重认证。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="versions.type === 'community'">
          <h1
            class="font-bold text-center text-40 leading-11 text-tertiary-1200 font-museo-slab"
          >
            WELL Community Standard
          </h1>
          <div class="mr-4 mt-10">
            <h5 class="mb-4 text-2xl font-medium leading-6 text-tertiary-1200">
              {{ $t('introduction') }}
            </h5>

            <div class="overview" v-html="versionDetails.overview"></div>
            <div
              class="text-xs mt-5 p-2 text-tertiary-1000 font-light leading-5 disclaimer"
              v-html="versionDetails.disclaimer"
            ></div>
          </div>
        </div>
        <div v-if="versions.type === 'v2-hsr'">
          <h1
            class="font-bold text-center text-32 leading-9 text-tertiary-1200"
          >
            WELL <span class="font-light">Health-Safety Rating</span>
          </h1>
          <div class="mr-4 mt-10">
            <h5 class="mb-4 text-2xl font-medium leading-6 text-tertiary-1200">
              {{ $t('introduction') }}
            </h5>

            <div class="overview" v-html="versionDetails.overview"></div>
            <div
              class="text-xs mt-5 p-2 text-tertiary-1000 font-light leading-5 disclaimer"
              v-html="versionDetails.disclaimer"
            ></div>
          </div>
          <div class="w-52 mt-2">
            <WButtonsBase
              v-if="$i18n.locale === 'cn'"
              @click.native="downloadStandardPdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              >EXPORT PDF STANDARD</WButtonsBase
            >
          </div>
        </div>
        <div v-if="versions.type === 'v2'">
          <h1
            class="font-bold text-center text-40 leading-11 text-tertiary-1200 font-museo-slab"
          >
            {{ splitName }}&trade;
          </h1>
          <div class="mr-4 mt-10">
            <h5 class="mb-4 text-2xl font-medium leading-6 text-tertiary-1200">
              {{ $t('introduction') }}
            </h5>

            <div class="overview" v-html="versionDetails.overview"></div>
            <div
              class="text-xs mt-5 p-2 text-tertiary-1000 font-light leading-5 disclaimer"
              v-html="versionDetails.disclaimer"
            ></div>
          </div>
        </div>
        <div v-if="versions.type === 'wpr' || versions.type === 'wer'">
          <h1
            class="font-bold text-center text-40 leading-11 text-tertiary-1200"
          >
            {{ splitName }}&trade;
          </h1>
          <div class="mr-4 mt-10">
            <h5 class="mb-4 text-2xl font-medium leading-6 text-tertiary-1200">
              {{ $t('introduction') }}
            </h5>

            <div class="overview" v-html="versionDetails.overview"></div>
            <div
              class="text-xs mt-5 p-2 text-tertiary-1000 font-light leading-5 disclaimer"
              v-html="versionDetails.disclaimer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="h-screen flex items-center w-full">
    <LoadingSpinner class="mx-auto" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'sidebar',
  computed: {
    ...mapState({
      versionDetails: (state) => state.standard.versionDetails,
      versions: (state) => state.standard.versions,
    }),
    splitName() {
      const currentName = this.versionDetails.name
      const cName = currentName.split(',')
      return cName[0]
    },
  },

  async mounted() {
    this.$store.commit('resetPartguidance')
    this.$store.commit('settings/setSidebarTab', 'overview')
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      await this.$store.dispatch('standard/fetchLatestVersion', {
        currentVersion: this.$route.params.version,
      })
    }
    this.$store.dispatch('standard/getVersionDetails', this.versions.id)
  },
  methods: {
    downloadStandardPdf() {
      const token = this.$cookies.get(this.$config.cbaPrefix + '.cba.token')
      if (token !== undefined && token.length > 0) {
        const url =
          process.env.apiUrl +
          'api/' +
          this.versions.id +
          '/pdfExport?token=' +
          token
        if (process.client) {
          window.open(url, '_blank')
        }
      } else {
        const query = process.env.appUrl + '' + this.$route.path

        if (process.client) {
          window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
        }
      }
    },
  },
}
</script>
<style scoped>
@layer base {
  .overview >>> p > em {
    @apply text-base
    font-light
    text-tertiary-1000
    leading-7;
  }

  .overview >>> p {
    @apply text-base
    font-light
    text-tertiary-1000
    leading-7;
  }

  .overview >>> p > strong {
    @apply text-base
    font-bold
    text-tertiary-1000
    leading-7;
  }

  .overview >>> span > strong {
    @apply text-base
    font-bold
    text-tertiary-1000
    leading-7;
  }

  .overview >>> a {
    @apply text-blue-1700;
  }
  .overview >>> a:hover {
    @apply text-blue-1200;
  }

  .overview >>> ol > li {
    @apply text-base
    font-light
    text-tertiary-1000
    leading-7;
  }

  .overview >>> ol > li > strong {
    @apply text-base
    font-bold
    text-tertiary-1000
    leading-7;
  }

  .overview >>> ul {
    @apply pl-10;
  }

  .overview >>> ol {
    @apply pl-10
    list-decimal;
  }

  .overview >>> ul > li {
    @apply text-base
    font-light
    text-tertiary-1000
    leading-7
    list-disc;
  }

  .overview >>> ul > li > strong {
    @apply text-base
    font-bold
    text-tertiary-1000
    leading-7;
  }

  .overview >>> h5 {
    @apply text-2xl
    text-tertiary-1200;
  }
  .overview >>> table > tbody {
    @apply border
    border-tertiary-1000;
  }

  .overview >>> table > tbody > tr {
    @apply border
    border-gray-1300;
  }

  .overview >>> table > tbody > tr > td {
    @apply border
    border-gray-1300
    p-2.5
    text-base
    font-light
    text-tertiary-1000;
  }

  .disclaimer >>> p > strong {
    @apply text-xs
    font-bold
    text-tertiary-1000
    leading-5;
  }

  .disclaimer >>> ol {
    list-style-type: auto;
    margin-left: 1em !important;
    padding-left: 1em !important;
  }
}
</style>
