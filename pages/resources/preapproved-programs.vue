<template>
  <div v-if="loading" class="lg:max-w-4xl mx-auto px-4 lg:px-0">
    <h1
      class="text-center font-medium text-32 md:text-40 text-gray-300 font-museo-slab mt-10 md:mt-20"
    >
      WELL: {{ $t('pre_approved_programs') }}
    </h1>
    <section class="mt-10 md:mt-20">
      <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
        WELL v2: {{ $t('Surveys') }}
      </h2>
      <div class="underline italic text-gray-50 font-light">
        Features C04 and C05: Approved third-party surveys
      </div>
      <p v-if="$i18n.locale === 'en'" class="text-gray-50 font-light leading-7">
        Below is a list of surveys that may be used to fulfill the third party
        survey option described in Part 1: Select Project Survey in C04:
        Occupant Survey, and in Part 1: Utilize Enhanced Survey requirement a)
        in C05: Enhanced Occupant Survey. Please note: For WELL v2 pilot
        projects, the below list can be used in reference to features C03:
        Occupant Survey and C04: Enhanced Occupancy Survey.
      </p>
      <p v-else class="text-gray-50 font-light leading-7">
        以下是由IWBI评估过的调查清单，它们满足了C04：住户调查的部分1：选择项目调查中列出的条件：
      </p>
      <ul class="list-disc ml-8">
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>
              Occupant Indoor Environmental Quality (IEQ) Survey<sup>TM</sup>
              from the Center for Built Environment at UC Berkeley.
            </template>
            <template #content>
              <p>
                Developed by psychologists and building scientists, the CBE
                Occupant Survey is a web-based tool based on 20 years of
                research. It allows building stakeholders to assess the
                performance and effectiveness of built environments and
                facilitates the acquisition of accurate and reliable feedback
                from the building occupants (i.e., the people who actually
                experience these spaces). This feedback creates an open dialogue
                between the building’s occupants, managers, owners, etc.
              </p>

              <p>
                This survey targets the main areas of environmental quality and
                occupant experience required by WELL. Users may also elect to
                add subsequent questions to measure desired optimizations. The
                tool also contains a set of targeted questions to drill down
                into specific areas of occupant concern, allowing decision
                makers to quickly identify problem areas. Users receive
                anonymized participant raw data alongside a summary report and
                question by question analysis of survey results. Most
                importantly, the report benchmarks a user’s results against
                similar buildings in one of the largest building databases in
                the world. These diagnostic capabilities allow stakeholders to
                make informed management decisions, and to assess the
                effectiveness of building features and design strategies.
              </p>

              <p>
                Info on Survey:
                <a
                  href="http://www.cbe.berkeley.edu/research/survey.htm"
                  style="color: #459db7"
                  >http://www.cbe.berkeley.edu/research/survey.htm</a
                >
                (Please note this will be changing soon, we will update you as
                soon as it does.)
              </p>

              <p>
                Primary contact for survey ordering:
                <a href="mailto:cbesurvey@berkeley.edu" style="color: #459db7"
                  >cbesurvey@berkeley.edu</a
                >
              </p>

              <p>
                Survey Lead—Lindsay Graham, Ph.D.:
                <a
                  href="mailto:LindsayTGraham@berkeley.edu"
                  style="color: #459db7"
                  >LindsayTGraham@berkeley.edu</a
                >
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>
              Building Evaluation Survey Use Studies (BUS) Wellbeing Survey.
            </template>
            <template #content>
              <p>
                The BUS Methodology Partner Network comprises a variety of
                organisations that have practitioners who are trained and
                licensed to carry-out occupant satisfaction evaluation using a
                set of standardised BUS Methodology questionnaires and
                analytical processes. BUS Partners can be selected to provide an
                assured and independent approach to post-occupancy evaluation.
              </p>

              <p>
                Please refer to the BUS Methodology website for the contact
                details of BUS Partners:
                <a
                  href="https://busmethodology.org.uk/partner.html"
                  style="
                    text-decoration: underline;
                    display: inline;
                    color: #459db7;
                  "
                  >https://busmethodology.org.uk/partner.html</a
                >
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>
              Sustainable and Healthy Environments (SHE) survey from the
              University of Melbourne.
            </template>
            <template #content>
              <p>
                Developed by the University of Melbourne, the SHE survey has
                been used to investigate links between how indoor environments
                are designed and occupants' satisfaction, health, productivity
                and wellbeing. Key modules include questions about interior
                design (layout, ergonomics, biophilia, aesthetics and way of
                working), Indoor Environmental Quality, health (physical and
                emotional), workplace policy and initiatives, sleep quality,
                nutrition and water. Research developed under the SHE umbrella
                is aimed at informing academia and industry about design
                solutions that perform highly from the occupants' perspective.
              </p>
              <p>
                For more information about SHE, please contact A/Prof Christhina
                Candido (<a href="mailto:christhina.candido@unimelb.edu.au"
                  >christhina.candido@unimelb.edu.au</a
                >).
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>
              Space Performance Evaluation Questionnaire (SPEQ), High
              Performance Environments Lab (HiPE), University of Oregon.
            </template>
            <template #content>
              <p>
                The Space Performance Evaluation Questionnaire (SPEQ™) was
                developed and tested in a variety of building types since 1998.
                It has since been applied to evaluate more than 150 buildings
                with a robust data-base containing more than 100 LEED™ and other
                certified green buildings with more than 100,000 data entry.
                This provides a wide data-base of responses to benchmark
                buildings against comparative baselines. The on-line occupant’s
                survey has developed categories and scales representative of
                most important issues identified by occupants to impact their
                comfort, satisfaction, performance, health, and well-being.
                SPEQ™ was cross-tested and calibrated in the field and in lab
                settings. The survey was peer-reviewed by an expert panel of 20
                professional building scientists, psychologists, space planners,
                architects, and physicians. As a pre-approved questionnaire of
                the WELL™ Standard, the questionnaire is approved by an
                international CITI Internal Review. It is available in four
                languages; English, Spanish, Italian, and Arabic.
              </p>

              <p>
                For more information on the questionnaire and implementation in
                your project visit:
                <a href="https://hipe.uoregon.edu" style="color: #459db7"
                  >hipe.uoregon.edu</a
                >
              </p>
              <p>
                E:
                <a href="mailto:hipe@uoregon.edu" style="color: #459db7"
                  >hipe@uoregon.edu</a
                >
              </p>
              <p class="-mt-4">P: 541.346.3670</p>

              <p>
                “SPEQ™ Approved Survey Instrument SPEQ™ evaluates 30 issues in
                76 questions classified in seven main categories. All questions
                contain a skip-logic approach to skip irrelevant information
                based on occupant’s responses. This makes the questionnaire more
                effective and reduces respondent’s fatigue. The average response
                time of the questionnaire is 12 minutes, with a minimum of eight
                and maximum of 20 minutes.
              </p>

              <p>
                All answers allow for continuous data that is easily analyzed
                using simple and more complex statistical modelling and
                regressions. In addition, open ended responses are encouraged
                for all questionnaire categories to allow occupants to voice
                their opinion without restrictions. The questionnaire requires
                participants to fill out a consent form but also allows them to
                skip demographic questions to maintain respondent’s privacy.
                Neither compensation nor a fee is administered for a respondent
                to respond to the questionnaire.
              </p>

              <p>
                When allowed by the occupant’s organization, respondents can
                select to enter a drawing for a gift card prize, if they answer
                the questionnaire in one time session. The drawing entry is
                set-up as a separate portal and is not linked to the respondents
                answer in anyway. Thanks to the rich data base of more than 150
                buildings and 100,000 respondents who completed the
                questionnaire, SPEQ responses can be benchmarked against
                comparative building typologies and demographics to allow for
                comparative analysis of occupant’s responses.
              </p>

              <p>
                In addition, SPEQ mapping tool allows for geo-marking an
                occupant’s response within a building to help locate issues and
                problems related to the building performance based on occupant’s
                responses. An additional module to measure and quantify physical
                indoor environmental quality (IEQ) parameters, (PROBPE™) is also
                available from HIPE lab and is well integrated with SPEQ.” SPEQ
                and PROBPE has been used by many Fortune 500 companies and
                leading organizations in the field, examples: CertianTeed,
                Saint-Gobain, SAGE glass, Solar World, American Institute of
                Architects, Portland Public Schools, Dallas Unified School
                District, Google, Eugene 4J school district, Department of
                Transportation, University of Oregon, US-AID, BOORA architects,
                Glumac Engineers, Energy Trust, Ankrom Moison Architects, etc.
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header> Leesman Index. </template>
            <template #content>
              <p>
                Leesman offers a standardised and independent measurement of
                employee workplace experience. The Leesman Office survey allows
                organisations to assess how well their workplaces are supporting
                employees, benchmarked against the Leesman Index – the world’s
                largest independent database on workplace experience with more
                than 480,000 responses globally (as at December 2018).
              </p>

              <p>
                The survey can be deployed across individual buildings or larger
                portfolios. It can be applied in any type of office solution and
                can be used in both pre and post project phases or as a standard
                annual assessment. The survey is available in 35 languages.
              </p>

              <p>
                The survey has four standardised sections that give a
                comprehensive assessment of how well the workplace is working
                for the organisation and its employees:
              </p>

              <ol class="space-y-1 ml-8 list-decimal mb-2">
                <li>
                  Work Activities – looks at what activities the employees do
                  and how well these are supported in the workplace
                </li>
                <li>
                  Workplace Impact – looks at how the workplace supports
                  productivity, pride, sense of community etc.
                </li>
                <li>
                  Physical Features – looks at which physical features are
                  important to the employees and how satisfied the employees are
                  with them.
                </li>
                <li>
                  Service Features – looks at which service features are
                  important to the employees and how satisfied the employees are
                  with them.
                </li>
              </ol>

              <p>
                Additional context-specific modules (e.g. environmental
                wellbeing, flexible working) are also available and tailored
                questions can be added at the end of the standardised survey.
              </p>

              <p>
                For more information, please contact
                <a href="mailto:info@leesmanindex.com" style="color: #459db7"
                  >info@leesmanindex.com</a
                >
                or visit
                <a href="https://www.leesmanindex.com/" style="color: #459db7"
                  >https://www.leesmanindex.com/</a
                >.
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header
              >Occupant Comfort & Wellness Survey from the Institute for the
              Built Environment at Colorado State University.</template
            >
            <template #content>
              <p>
                The Institute for the Built Environment (IBE) at Colorado State
                University offers basic and customizable occupant survey
                services, as well as focus group, interview, Social Network
                Analysis (SNA), and programming support services. IBE’s current
                survey was developed for office buildings, and IBE is developing
                a multi-family residential version.
              </p>
              <p>
                IBE’s services will help you understand how your building and
                programming are impacting occupant comfort, health, wellness,
                and in the case of organizations, performance. If you're focused
                on office buildings, IBE's SNA will inform strategies to foster
                high-performing teams that drive innovation; for multi-family
                projects, the SNA will inform strategies to support tenant
                connectivity and satisfaction.
              </p>
              <p>
                For nearly 25 years, IBE has been bridging academia and
                industry, providing an unbiased approach to its clients and
                acting as partners, not just service providers.
              </p>
              <p>
                Led by Dr. Jeni Cross, Associate Professor of Sociology and
                expert in professional social networks and behavior change, IBE
                collaborates with organizations--ranging from municipalities to
                multi-family property owners to multi-national corporations--to
                translate survey outcomes and other insights into action plans
                that help them realize their goals.
              </p>
              <p>
                On every project, IBE engages a CSU student in a pivotal
                internship experience that prepares them for future careers,
                which means that by working with IBE, you're serving your needs
                while also supporting the broader sustainability movement.
              </p>

              <p>
                The Occupant Comfort & Wellness Survey from the Institute for
                the Built Environment (IBE) at Colorado State University offers
                basic and customizable options to help you understand how your
                building is impacting your occupants: What’s working well,
                what’s not, and why. For nearly 25 years, IBE has been bridging
                academia and industry, providing an unbiased approach to all of
                our clients.
              </p>

              <p>
                IBE’s survey is currently focused on office buildings, and we
                are developing a version for multi-family residential projects.
                At this time, our core survey addresses the following aspects of
                occupant comfort, health, wellness, and performance:
              </p>

              <ul class="mb-1 space-y-1 list-circle ml-8 mb-2">
                <li>Office layout</li>
                <li>Workspace adjustability</li>
                <li>Thermal comfort</li>
                <li>Air quality</li>
                <li>Lighting</li>
                <li>Acoustic quality</li>
                <li>Building cleanliness</li>
                <li>Wellbeing & health conditions</li>
              </ul>

              <p>
                IBE offers survey services ranging from basic to customized.
                Basic services involve administering and analyzing the core
                survey, and providing a basic report of results. Our customized
                services offer opportunities to:
              </p>

              <ul class="mb-1 space-y-1 list-circle ml-8">
                <li>
                  adapt and add survey items specific to your organization,
                  building, programming, and concerns;
                </li>
                <li>
                  receive a detailed report that interprets survey results;
                </li>
                <li>
                  receive a report of recommendations for improving your
                  building and programming; and
                </li>
                <li>
                  present results, in-person or remotely, to your leadership
                  team or organization
                </li>
              </ul>

              <p>
                When pursuing customized services, IBE works closely with you
                from survey design to reporting to ensure that we are asking the
                right questions, analyzing the data based on your challenges and
                opportunities, and providing actionable recommendations for
                building operations and programming improvements.
              </p>
              <h4 class="mb-1 font-normal">What makes IBE unique?</h4>
              <p>
                As an educational non-profit driven by CSU’s land-grant mission
                to support our communities, IBE offers an unbiased approach to
                your survey needs. In every project that we serve, including
                occupant surveys, IBE engages at least one CSU student in a
                pivotal internship experience that helps launch them into
                sustainability-focused careers.
              </p>
              <h4 class="mb-1 font-normal">Additional services</h4>
              <p>
                IBE also offers these related services to better uncover
                opportunities to make your building and programming as effective
                as possible for your employees and tenants:
              </p>
              <ul class="mb-1 space-y-1 list-circle ml-8">
                <li>
                  <strong>Interviews & Focus Groups:</strong> We can conduct
                  one-on-one interviews and/or focus groups with your
                  organization’s executives, decision makers, and additional
                  occupants. Interviews and focus groups provide additional
                  understanding of patterns and/or unexpected outcomes from your
                  survey by offering deeper insight into occupants’ experience
                  and motivations. They can also provide insight into such
                  details as the most/least valuable design and programming
                  features, their impacts on occupant health and wellness, and
                  gaps between intended design uses and functions. IBE will work
                  closely with you to determine whether interviews, focus
                  groups, or both will best meet your goals.
                </li>

                <li>
                  <strong>Social Network Analysis:</strong>
                  <ul class="mb-1 space-y-1 list-square ml-8">
                    <li>
                      <strong>For Organizational Projects:</strong> Many teams
                      depend on knowledge integration across diverse sets of
                      expertise to be successful. For these teams, connectivity
                      between team members can be a strong predictor of
                      innovation and success. But it isn’t enough to have more
                      team members or more meetings; instead, it is the team
                      structure—the relationships between people—that is the key
                      to successful projects. IBE can assess team relationships
                      by adding a Social Network Analysis (SNA) module to your
                      survey. The SNA maps relationships between team members,
                      including those who provide social and instrumental
                      support, using questions such as: Which team members do
                      you turn to for help when you have a problem? Whom do you
                      trust to keep your best interests in mind? Whom do you
                      socialize with outside of the office? Beyond conducting an
                      SNA, we can provide strategic support by developing and
                      helping to execute an action plan for improving your
                      teams’ networks.
                    </li>

                    <li>
                      <strong>For Multi-family Projects:</strong> One predictor
                      of human health and wellbeing is an individual’s social
                      networks and support. A Social Network Analysis (SNA)
                      assesses social support by mapping relationships between
                      people, including those who provide social, emotional, and
                      fundamental support. IBE can include an SNA module in your
                      survey to assess the effectiveness of your building’s
                      design and programming in facilitating social
                      relationships. We can also offer recommended strategies
                      for enhancing your tenants’ social networks.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Programming Support:</strong> IBE’s surveys,
                  interviews, and focus groups can provide you with an abundance
                  of information regarding how your building is performing for
                  and impacting occupants. But this is where the real work
                  begins. Armed with greater understanding of your building and
                  programming, we can work with you to develop and implement an
                  action plan that helps you realize your goals.
                </li>
              </ul>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>Comfortmeter</template>
            <template #content
              ><p>
                <strong>HOW DOES YOUR BUILDING IMPACT YOUR PEOPLE?</strong>
              </p>
              <p>That is the core question being addressed by Comfortmeter.</p>
              <p class="pb-4">
                Which indoor comfort parameters are perceived as important by
                office workers? Which aspects contribute to their well-being at
                the office, hence to their engagement and productivity? These
                questions are addressed by directly surveying employees via an
                on-line tool. By means of an econometric model, Comfortmeter
                objectifies the subjective comfort experience. The outcome of
                the survey is a well-structured report in which the score of the
                surveyed building (or building zone) is presented in visually
                attractive and self-explanatory graphs. The results are also
                bench-marked against other buildings. By comparing with
                best-in-class buildings, the productivity improvement potential
                in financial terms is calculated and ranked. By comparing with
                the average scores, the productivity advantage of the
                well-scoring aspects are reported and ranked.
              </p>
              <p><strong>HOW DOES COMFORTMETER WORK?</strong></p>
              <p>
                Comfortmeter currently measures the performance of a building in
                respect to its most important IEQ topics as perceived by the
                building occupants (cf. (WELL v1):
              </p>
              <ul class="mb-1 space-y-1 list-circle ml-8">
                <li>thermal comfort</li>
                <li>air quality</li>
                <li>lighting</li>
                <li>acoustics</li>
                <li>individual control</li>
                <li>office environment & cleanliness</li>
              </ul>
              <p>
                In order to get a more complete picture of how the workplace is
                being experienced by the building user, Comfortmeter is being
                upgraded towards the WELL v2 requirements. This will include new
                topics such as nutrition, health, and well-being policies.
              </p>
              <p>
                <strong
                  >WHO BENEFITS FROM CONDUCTING COMFORTMETER SURVEYS?</strong
                >
              </p>
              <p>
                Comfortmeter is the perfect measuring tool for real estate
                owners who are looking for stable and steady rental incomes by
                monitoring their tenants’ satisfaction.
              </p>
              <p>
                Comfortmeter also brings added value for tenants, as it allows
                organizations to monitor the comfort satisfaction of their
                workforce. It is important to keep track of this satisfaction as
                it has a major impact on the well-being, productivity and
                sick-leave of employees.
              </p>
              <p>
                The use of Comfortmeter may also be used as 'Post Occupancy
                Survey' in certification systems such as WELL and BREEAM-in-use.
              </p>
              <p>
                Comfortmeter was developed in cooperation with 6 universities,
                with support from the European Commission. Meanwhile, 5500+
                surveys were completed in 160+ buildings.
              </p>
              <p>
                <strong>WEBSITE (10 languages):</strong>
                <a href="http://www.comfortmeter.eu" target="_blank"
                  >www.comfortmeter.eu</a
                >
              </p>
              <p>
                <strong>CONTACT:</strong>
                <a href="mailto:info@comfortmeter.eu">info@comfortmeter.eu</a>
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>
              Healthy Building Index (HBI), from bba indoor environment &
              DGMR.</template
            >
            <template #content>
              <p>
                <strong
                  >How healthy, stimulating and comfortable is your
                  building?</strong
                >
              </p>
              <p>
                The Healthy Building Index tool promotes healthy and comfortable
                office environments. The importance of a healthy and comfortable
                indoor environment has been demonstrated by its positive
                influence on productivity, health and wellbeing.
              </p>
              <p>
                <i>bba indoor environmental consultancy</i> and <i>DGMR</i> have
                joined forces and developed the Healthy Building Index tool.
                <i>bba indoor environmental consultancy</i> is specialized in
                the indoor environment and its effect on people in terms of
                comfort, health and productivity and has over 20 years of
                experience in collecting user feedback. DGMR is a consultancy
                firm that offers innovative solutions for a sustainable, safe
                and healthy environment and has almost 40 years’ experience in
                assisting design teams for new constructions, renovations and
                transformations of buildings.
              </p>
              <p>&nbsp;</p>
              <p><strong>How does it work?</strong></p>
              <p>
                The Healthy Building Index tool objectively measures the
                satisfaction of building users regarding the indoor environment
                and the facilities offered to improve their health and level of
                comfort.
              </p>
              <p>
                The Healthy Building Index* tool evaluates the following themes:
              </p>
              <ul class="mb-1 space-y-1 list-circle ml-8">
                <li>Thermal comfort</li>
                <li>Indoor air quality</li>
                <li>Light</li>
                <li>Acoustics</li>
                <li>Personal control</li>
                <li>Building related health</li>
                <li>Self-assessed productivity</li>
                <li>Ergonomics</li>
                <li>Lay-out</li>
                <li>Cleanliness</li>
                <li>Nourishment</li>
                <li>Water</li>
                <li>Movement</li>
                <li>Wellness policies</li>
              </ul>
              <p>
                The Healthy Building Index tool is both efficient and thorough:
                only when a respondent is not satisfied with a theme, he or she
                will be asked to elaborate on the cause of dissatisfaction in
                detail by answering additional questions.
              </p>
              <p>
                To thoroughly understand the actual quality of the office, the
                results of each theme are compared to those of an average office
                building. Finally the calculated level of satisfaction of all
                themes is combined and expressed using a score between 100 and
                1000: the Healthy Building Index.
              </p>
              <p>&nbsp;</p>
              <p><strong>What will you get?</strong></p>
              <p>
                The result of the Healthy Building Index tool is presented
                online, on a building specific and secured webpage.
              </p>
              <p>
                The Healthy Building Index shows how well your building
                performs. Additionally, you will gain insight into the
                building-related health- and self-estimated productivity of the
                employees. Finally, risk factors are identified and
                recommendations for potential improvements are provided, based
                on the feedback of the building users and the building
                characteristics.
              </p>
              <p>
                Website:
                <a
                  href="https://healthybuildingindex.nl/home/"
                  target="_blank"
                  class="text-gray-300"
                  >https://healthybuildingindex.nl/home/</a
                >
              </p>
              <small class="text-gray-1100 font-normal"
                >* The Healthy Building Index + WELL module</small
              >
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header
              >Occupant Wellness Survey by Well Living Lab China.
            </template>
            <template #content>
              <p>
                This Occupant Wellness Survey is provided by Well Living Lab
                (China), and is operated by Well Living Lab (China) in
                collaboration with the Center for Healthy Cities, Institute for
                China Sustainable Urbanization, Tsinghua University. The
                research team contributed to the creation of this Survey
                includes experts in the fields of building sciences, psychology,
                medical science, public health, architectural design.
              </p>
              <p>
                This survey aims to help occupants measure the impact of healthy
                designs on occupants’ perceptions of environmental conditions,
                workplace wellbeing, and mental and physical health. The
                Occupant Wellness Survey employs sets of questions designed to
                evaluate workplace environments in terms of occupants’
                satisfaction, and their feedback on air and water quality,
                lighting, thermal comfort, acoustics, ergonomics, space layout &
                furnishings, maintenance & cleanliness, access to nature,
                nourishment, well policies, physical activity & stress recovery,
                productivity & engagement, and health status.
              </p>
              <p>
                Well Living Lab (China) also offers additional customizable
                survey services for projects interested in more analytical
                understanding of occupants’ health and wellbeing. The Occupant
                Wellness Survey consists of core questions and additional
                questions for different customer needs. The survey outcomes will
                be analyzed from the relevant aspects listed above, and
                presented in the form of survey reports.
              </p>
              <p>
                For more information, please contact:
                <a href="mailto:wllchina@delos.com" class="text-gray-300"
                  >wllchina@delos.com</a
                >
              </p>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header> PeopleLOOK survey by Baker Stuart</template>
            <template #content
              ><div class="mt-3 card card-body">
                <p>
                  Developed by Baker Stuart in the UK, PeopleLOOK is an
                  independent, anonymous web-based satisfaction survey designed
                  to assess the perceived satisfaction of employees along with
                  areas for improvement. PeopleLOOK measures not just employee
                  satisfaction with the workplace, wellbeing and workplace
                  objectives but also their perceived activities in various
                  locations and work style preferences.
                </p>
                <p>
                  The core survey covers the following modules and is quick and
                  simple – typically taking only 10-15 minutes to complete:
                </p>
                <ol class="mb-1 space-y-1 list-decimal ml-8">
                  <li>
                    Demographics - About you: Explores the respondent’s work
                    role and location as well as identifying personality
                    characteristics. This allows for cross-cutting of data to
                    identify and analyse trends.
                  </li>
                  <li>
                    Activity - How you spend your time: Provides an
                    understanding of the employee’s work patterns and primary
                    activities in order to tailor the workspace to meet the
                    patterns established.
                  </li>
                  <li>
                    Your workspace & working environment: Identifies different
                    workspaces and regularity of their use. Also measures the
                    responder’s satisfaction with environmental factors,
                    interior décor and comfort levels.
                  </li>
                  <li>
                    Health & Wellbeing: Explores the interest the organisation
                    demonstrates with regards to health and wellbeing in the
                    workplace and current satisfaction of provisions.
                  </li>
                  <li>
                    Company Objectives: Identifies employees’ perceptions of the
                    company. Explores topics such as collaboration, sense of
                    community and pride and enjoyment working for the company.
                  </li>
                  <li>
                    Overall Satisfaction: Looks at the participant’s overall
                    satisfaction with their workplace and allows an opportunity
                    to identify the most important characteristics of a
                    workplace.
                  </li>
                </ol>
                <p>
                  Organisations may also choose to add additional modules either
                  for WELL Certification optimisation purposes, or for internal
                  purposes as required.
                </p>
                <p>
                  The survey is designed to be used by organisations of all
                  sizes, both pre and post project, or as a standalone survey to
                  take a snapshot of employee satisfaction and perception at any
                  given point. It can be used internationally and can be
                  translated into native languages as required.
                </p>
                <p>
                  For more information please contact
                  <a
                    href="mailto:office@bakerstuart.com"
                    target="_blank"
                    class="text-gray-300"
                    >office@bakerstuart.com</a
                  >
                  or visit our website at
                  <a
                    href="https://bakerstuart.com/"
                    target="_blank"
                    class="text-gray-300"
                    >https://bakerstuart.com/</a
                  >.
                </p>
              </div>
            </template>
          </LazyAccordiansTransparent>
        </li>
        <li class="text-gray-300 font-light leading-7">
          <LazyAccordiansTransparent
            bodyclass="bg-white p-5 mt-4 mb-4"
            headerclass="p-0 cursor-pointer hover:underline"
          >
            <template #header>
              IDEWE: WELL occupancy survey by group IDEWE
            </template>
            <template #content>
              <p>
                <strong>Developer</strong>: the survey was developed in 2021 by
                the group IDEWE, a leading company in Belgium that provides
                services to other companies to increase the overall wellbeing
                (health and safety, ergonomics, mental wellbeing, etc.) of their
                employees since 1968. IDEWE is licenced to consult other
                companies in constructing a WELL approved building and built
                their first WELL-building in 2020. The R&D department of IDEWE
                has over 20 years of experience in constructing and analysing
                questionnaires.
              </p>
              <p>
                <strong>Expertise</strong>: Headed by Prof. Dr. L. Godderis of
                the University of Leuven (Department of occupational health), a
                multidisciplinary team of 2 psychologists, 1 ergonomist, and
                several engineers. This combined scientific research and field
                experience was used to develop the survey tool using
                scientifically validated questionnaires whenever possible and
                adding self-constructed questions when necessary.
              </p>
              <p>
                <strong>The Survey</strong>: The survey is organised around the
                10 topics of WELL: Air, Water, Nourishment, Light, Movement,
                Temperature, Sound, Materials, Mind, & Community. Depending on
                selected job type, respondents will fill out different
                questions. This survey can thus be used for four different types
                of industry: desk jobs/white collar work, health care, physical
                work (e.g. warehouse) and repetitive work (e.g. cashier). The
                survey can be customized with additional questions. The survey
                can be filled out on desktop, tablet, or smartphone. The survey
                can be distributed with either an open link or with a
                personalised link via e-mail.
              </p>
              <p>
                <strong>Privacy</strong>: IDEWE gathers, analyses, and stores
                medical data of over 8,220,000 employees and has very strict
                cybersecurity policies to ensure the privacy and data protection
                of every participant. <br />Current available languages are
                Dutch, French and English, but adding extra languages is
                possible.
              </p>
              <p>
                <strong>Types of services provided by IDEWE</strong>: DEWE
                offers full service consultation for clients. This includes:
              </p>
              <ul>
                <li>
                  Conducting the survey and analysing the data including
                  correlations between environmental and outcome variables.
                </li>
                <li>
                  Results reviewed in a presentation with question by question
                  analysis of survey results. Correlations are made between
                  environment and outcome variables.
                </li>
                <li>
                  Additionally, users can consult IDEWE experts on occupational
                  health, safety, ergonomics, mental wellbeing, etc… to advise
                  them on how to implement changes to take on areas of concern
                  or to conduct further on-site investigation (e.g. air samples)
                  to assess risks.
                </li>
              </ul>
              <p>
                <strong>Contact</strong>: for more information (prices,
                statistical analysis methods, survey test form, …) please
                contact
                <a href="mailto:rapsiteam@idewe.be"> rapsiteam@idewe.be</a>
              </p>
              <ul>
                <li>
                  <strong>JLL</strong>: Global Benchmarking Services (GBS) are
                  independent specialists in real estate performance measurement
                  with over 25 years of experience. Our Human Experience (HX)
                  Analytics survey is designed for maximum flexibility to help
                  organisations measure their employee’s workplace experience,
                  both at home and in the office as well as their hybrid needs
                  if required.
                  <p>
                    The HX survey allows organisations to truly understand how
                    their employees perceive their working environments. HX is
                    offered as part of a survey platform solution allowing
                    organisations to focus on the key aspects of employee
                    experience that matter to them. The platform consists of a
                    choice of over 130 questions and allows for custom questions
                    to be added enabling each organisation to tailor the survey
                    to meet their exact needs. Set questions are all benchmarked
                    against our database. Given the huge change in workplace in
                    recent years we default to our post-pandemic era responses
                    for benchmarks (100,000 in the post-pandemic era) rather
                    than making comparisons to erroneous pre-pandemic responses.
                  </p>
                  <p>
                    The survey is scalable and can be deployed at building level
                    up to entire pan-portfolios. The survey has been used to
                    support pre and post project appraisals, right-sizing FM
                    delivery, as well as of course helping support and progress
                    WELL standards. The survey is available in over 40
                    languages.
                  </p>
                  <p>
                    The survey structure is set out into four key parts:
                    demographic, experience, demand, and ad-hoc custom. The
                    experience section comprises core themes of Technology,
                    Focused work, Collaboration and Wellbeing for both the
                    office and home environments.
                  </p>
                  <p>
                    For more information, please contact
                    <a href="mailto:andrew.hawkeswood@eu.jll.com"
                      >andrew.hawkeswood@eu.jll.com</a
                    >
                    or visit
                    <a
                      href="https://www.jll.co.uk/en/solutions/global-benchmarking-services"
                      style="color: #459db7"
                      >https://www.jll.co.uk/en/solutions/global-benchmarking-services</a
                    >
                  </p>
                </li>
              </ul>
            </template>
          </LazyAccordiansTransparent>
        </li>
      </ul>
      <div class="underline italic text-gray-50 font-light mt-4">
        Feature C05: Approved surveys for additional topics
      </div>
      <div v-if="$i18n.locale === 'en'">
        <p class="text-gray-50 font-light leading-7">
          Below is a list of surveys that meet the criteria for the additional
          survey topics outlined in Part 1: Utilize Enhanced Survey requirement
          b) in C05: Enhanced Occupant Survey. Please note: For WELL v2 pilot
          projects, the below list can be used in reference to feature C04:
          Enhanced Occupancy Survey.
        </p>
        <ul class="space-y-1 list-disc ml-8 text-gray-300 font-light leading-7">
          <li>
            <LazyAccordiansTransparent
              bodyclass="bg-white p-5 mt-4 mb-4"
              headerclass="p-0 cursor-pointer hover:underline"
            >
              <template #header>BeWellLeadWell. </template>
              <template #content>
                <div>
                  <p>
                    <strong
                      >BE WELL LEAD WELL® PULSE ASSESSMENT ABOUT
                      THRIVING</strong
                    >
                  </p>
                  <p>
                    <strong
                      >AN OVERVIEW OF THE BE WELL LEAD WELL® PULSE ASSESSMENT
                      SYSTEM</strong
                    >
                  </p>
                  <p>
                    Creating a culture where thriving is valued is a mark of a
                    successful organization and effective leadership. Be Well
                    Lead Well® Pulse is a pioneering assessment system designed
                    to empower people to adopt a leadership role to make
                    thriving a game-changer in their teams and organizations,
                    starting with themselves. It combines the latest science
                    about human thriving with three decades of experience
                    developing leaders in organizations worldwide.
                  </p>
                  <p>
                    Be Well Lead Well® Pulse focuses on factors of thriving
                    because research across a wide range of fields shows higher
                    thriving linked to:
                  </p>
                  <ul class="space-y-1 list-circle ml-8">
                    <li>
                      <i>Personal resources</i>, for example, autonomy,
                      flexibility and learning, resilience, risk-taking,
                      internal locus of control, engagement at work,
                      self-esteem, significance, and meaning at work
                    </li>
                    <li>
                      <i>Social resources</i>, for example, social support and
                      belonging in life and work, family enrichment, and
                      work-to-family balance
                    </li>
                    <li>
                      <i>Physical wellbeing</i>, for example, more energy,
                      better health, and less stress
                    </li>
                    <li>
                      <i>Psychological wellbeing</i>, for example, higher
                      quality of life, cognitive agility and performance,
                      optimism, emotional regulation, stress-coping, and optimal
                      functioning
                    </li>
                    <li>
                      <i>Leadership motivations</i>, for example, purpose and
                      vision, intrinsic values and expectations, career
                      wellbeing, and social impact and altruism
                    </li>
                    <li>
                      <i>Workplace outcomes</i>, for example, lower healthcare
                      costs, lower turnover rates, colleague engagement,
                      organization and team performance, and positive customer
                      feedback
                    </li>
                  </ul>
                  <br />

                  <p>
                    <strong
                      >A SNAPSHOT ABOUT THE FEATURES OF BE WELL LEAD WELL®
                      PULSE</strong
                    >
                  </p>
                  <ul class="mb-1 space-y-1 list-circle ml-8">
                    <li>
                      <strong>WHAT IT IS:</strong> An assessment about the
                      extent to which leaders are thriving plus amplifying
                      thriving to benefit the people, teams, and organizations
                      they impact. The Be Well Lead Well® Pulse assessment
                      covers and reports on 6 dimensions (Thriving, Fuel, Flow,
                      Wonder, Wisdom, and Thriving AmplifiedTM) and 19
                      subcategories.
                    </li>
                    <li>
                      <strong>BUILT BY:</strong> The leadership and culture
                      development firm, Wisdom Works Group, with the scientific
                      support by the Positive Organization Center at the College
                      of Business, University of Colorado in Colorado Springs.
                    </li>
                    <li>
                      <strong>TIME TO COMPLETE: </strong>Approximately 20
                      minutes.
                    </li>
                    <li>
                      <strong>AUDIENCE: </strong>Designed for all levels,
                      including titled leadership roles and strategic
                      influencers in the organization. It may also be used by
                      intact teams, professional networks, and individuals and
                      groups across an organization.
                    </li>
                    <li>
                      <strong>USERS RECEIVE: </strong>Personalized reports for
                      the individual, group, or organization for purposes of
                      learning, development, and capacity-building. Users also
                      receive an in-depth debrief of their assessment results
                      and the Be Well Lead Well® Pulse Interpretation Manual,
                      complete with close to 100 macro- and micro-practices, for
                      transforming assessment feedback into actions to enhance
                      thriving and effectiveness.
                    </li>
                    <li>
                      <strong>STRATEGIC APPLICATION: </strong>As a stand-alone
                      tool or as part of organizational strategies to build
                      thriving work culture, as well as approaches, such as
                      development and onboarding, to elevate the organization’s
                      leadership capability. May also be augmented, as desired,
                      with Be Well Lead Well® programs to build healthier, more
                      effective leadership, plus certify practitioners to apply
                      Be Well Lead Well® Pulse for positive impact throughout
                      the organization.
                    </li>
                  </ul>
                  <br />

                  <p><strong>FOR MORE INFORMATION</strong></p>
                  <p>
                    For more information about the
                    <a
                      href="https://www.bewellleadwell.com/assessment/"
                      target="_blank"
                      >Be Well Lead Well® Pulse assessment</a
                    >
                    or
                    <a
                      href="https://www.bewellleadwell.com/certification/"
                      target="_blank"
                      >Be Well Lead Well® Pulse Certification</a
                    >, contact Renee Moorefield, CEO of Wisdom Works Group, at
                    <a href="mailto:renee@wisdom-works.com" target="_blank"
                      >renee@wisdom-works.com</a
                    >.
                  </p>
                </div>
              </template>
            </LazyAccordiansTransparent>
          </li>
          <li>
            <LazyAccordiansTransparent
              bodyclass="bg-white p-5 mt-4 mb-4"
              headerclass="p-0 cursor-pointer hover:underline"
            >
              <template #header>OHFB-Afriforte. </template>
              <template #content>
                <div class="mt-3 card card-body">
                  <p><strong>The OHFB Workplace Analytics System</strong></p>
                  <p>
                    The OHFB Workplace Analytics System is a norm-based business
                    risk management instrument that evaluates human capital and
                    workplace risks by answering the following questions to
                    Executives or Business Risk Managers:
                  </p>
                  <ul>
                    <li>
                      Does the staff component function optimally? Can they act
                      on strategic, tactical, and operational intent? Can they
                      provide us with a competitive edge? The System generates a
                      standardized employee functioning metric for each area of
                      operations.
                    </li>
                    <li>
                      Is the workplace supporting efficiency and high
                      performance and if not, what are the risk factors in our
                      places of work (unique workplace dynamics)? This is about
                      good corporate governance and due diligence. System
                      generates a standardized workplace management metric for
                      each area of operations.
                    </li>
                    <li>
                      Which areas in our business need more support and from
                      which areas can we learn? Based on the Performance Scores
                      achieved.
                    </li>
                    <li>
                      What are the <strong>risks</strong> associated with
                      employee turnover, absence, and presenteeism? What are the
                      <strong>cost</strong> implications of these risks? How can
                      we reduce these risks? System generates risks, costs, and
                      the workplace drivers of risks.
                    </li>
                    <li>
                      What are the
                      <strong>work-related wellbeing risks</strong> of the
                      workforce (Work Engagement, Burnout, Distraction,
                      Over-commitment, and Disengagement)? Which workplace
                      factors drive these risks? System generates risks and Risk
                      Factor Index for each work-related wellbeing dimension.
                    </li>
                    <li>
                      What do we need to do to promote our people and work
                      climate to obtain the best ROI? (Pareto 20:80) System
                      generates a Risk Factor Index based on
                      <strong
                        >the unique dynamics of each company for the best
                        ROI</strong
                      >.
                    </li>
                  </ul>
                  <p>
                    The OHFB Workplace Analytics System empowers managers to
                    objectively quantify human capital risks as part of the
                    broader risk management endeavors in the company. The system
                    is utilized across the Globe for this purpose. For more info
                    see:
                    <a
                      href="http://www.afriforte.com/home/ohfb/"
                      target="_blank"
                      >http://www.afriforte.com/home/ohfb/</a
                    >
                  </p>
                </div>
              </template>
            </LazyAccordiansTransparent>
          </li>
          <li>
            <LazyAccordiansTransparent
              bodyclass="bg-white p-5 mt-4 mb-4"
              headerclass="p-0 cursor-pointer hover:underline"
            >
              <template #header> The Thrive XM Index.</template>
              <template #content>
                <div class="mt-3 card card-body">
                  <p>
                    People are the single most important resource in determining
                    your future success. And when a resource is this important,
                    it can’t be taken for granted.
                  </p>
                  <p>
                    That’s what the Thrive XM Index is all about. Created by
                    Thrive Global in partnership with SAP and Qualtrics, the XM
                    Index goes beyond traditional employee surveys, focusing on
                    the whole human and measuring the experiences and moments
                    that define our lives, when companies’ relationships with
                    their people are made or broken.
                  </p>
                  <p class="mg-b-10">
                    The Thrive XM Index is a window into your organization,
                    giving you a fuller – and full-color – picture of your
                    people and what makes them tick. It delivers:
                  </p>
                  <ul>
                    <li>
                      Revealing data specific to your company so you can zero in
                      on your biggest pain points
                    </li>
                    <li>
                      A 360-degree view of employees to create a full view of
                      not just the employee experience, but the people
                      experience
                    </li>
                    <li>
                      Your organization’s custom Thrive score, highlighting key
                      strengths and weaknesses
                    </li>
                    <li>
                      A detailed breakdown of your employee data in three
                      categories: People Experiences, Moments That Matter and
                      Employee Well-being
                    </li>
                  </ul>
                  <p>
                    With the Thrive XM Index, you’ll take a deep dive into your
                    data to better understand where you employees are thriving
                    (or just surviving) and how you can best move toward
                    sustainable peak performance.
                  </p>
                </div>
              </template>
            </LazyAccordiansTransparent>
          </li>
          <li>
            <LazyAccordiansTransparent
              bodyclass="bg-white p-5 mt-4 mb-4"
              headerclass="p-0 cursor-pointer hover:underline"
            >
              <template #header>
                The Kind Quiz<sup>®</sup> and Net Culture Score<sup
                  >®</sup
                ></template
              >
              <template #content
                ><div class="mt-3 card card-body">
                  <strong>Overview</strong>
                  <p>
                    Summery delivers AI-driven applications that quantify and
                    measure the values of empathy, integrity, innovation,
                    disruption, and agility. By combining behavioral science
                    with Machine Learning and Natural Language Processing (NLP),
                    we activate and analyze stakeholder engagement and
                    organizational cultural alignment.
                  </p>
                  <p>
                    Our core technologies, the Net Culture Score<sup>®</sup>
                    (NCS) and The Kind Quiz<sup>®</sup>, are in use in 146
                    countries with multi-lingual capabilities. We are thrilled
                    to work with partners such as the Bill & Melinda Gates
                    Foundation, NASDAQ and Fortune 500 companies like
                    Salesforce, and educational organizations like Stanford
                    University and the California Community College system.
                  </p>

                  <strong>Organizational Benefit</strong>
                  <p>
                    Corporations leverage Kind Quiz and NCS<sup>®</sup> data
                    analytics for organization-wide benefits:
                  </p>
                  <ol>
                    <li>
                      Compliance officers receive an annual “culture audit” and
                      quarterly reporting on progress toward goals
                    </li>
                    <li>
                      C-suite executives set a baseline in which to quantify and
                      objectively measure the adherence of the “S” of their ESG
                      platform for investors & public communications
                    </li>
                    <li>
                      DEI directors track Employee Resource Group (ERG)
                      engagement and data-curate activities for increased
                      belonging
                    </li>
                    <li>
                      CSR managers increase employee engagement ROI via highly
                      personalized and localized matching with our proprietary
                      database of 20,000 100% virtual social-impact activities
                    </li>
                    <li>
                      HR gains insights on the alignment between organizational
                      culture and applicant/employee values for more informed
                      recruitment and retention decisions
                    </li>
                    <li>
                      Evaluations & Measurement teams measure corporate value
                      alignment of stakeholders
                      (employees/vendors/customers/community) with U.N.
                      Sustainable Development Goals
                    </li>
                  </ol>
                  <strong>AI-Powered Applications</strong>
                  <ol>
                    <li>
                      <u>The Kind Quiz<sup>®</sup></u> was created to better
                      understand individual values. Upon completing the 5-minute
                      online quiz, each participant is matched with 1 of 10 Kind
                      profile types (representing 98,304 different combinations
                      of traits), receives a 3-page overview of their profile,
                      and are real-time matched with 3 data-curated personalized
                      social impact activities.
                    </li>
                    <li>
                      <u>Net Culture Score<sup>®</sup></u> measures the
                      alignment between an organization’s stated culture and the
                      organizational values as expressed by stakeholders.
                      Leveraging ML and NLP, our Summery team assesses publicly
                      available information that represents the organization’s
                      cultural footprint to compare the stakeholders’ aggregate
                      scores from The Kind Quiz. The result is a numeric score
                      that measures the alignment between “aspirational”
                      organizational culture and “actual” stakeholder values.
                    </li>
                  </ol>
                  <strong>Scientific Methodology</strong>
                  <p>
                    Developed by our team of cognitive, behavioral, and data
                    scientists with backgrounds in neuropsychology and cultural
                    anthropology, our applications have a rigorous scientific
                    foundation. The basis of our work is a proprietary
                    3,500-word cultural dictionary underpinning our matching
                    algorithms and NLP. We continuously test quiz validity and
                    reliability, including anti-bias crowd-truthing, to ensure
                    that Kind profiles are representative and resonate with all
                    audiences.
                  </p>
                  <strong>Audience</strong>
                  <p>
                    Our advanced technology was built to engage key
                    stakeholders—employees, customers, students, and donors.
                    Summery applications are in use in 146 countries and
                    multi-lingual.
                  </p>
                  <strong>Deliverables</strong>
                  <ol>
                    <li>
                      <u>Employees:</u> 3-page Kind profile,
                      daily/weekly/monthly AI-powered activity matching to
                      inspire behavioral change, and Net Culture Score
                      scorecards.
                    </li>
                    <li>
                      <u>Executives:</u> Real-time stakeholder results and
                      engagement metrics, as well as an in-depth data-analytic
                      Summery<sup>®</sup> Report and organizational Net Culture
                      Scorecard.
                    </li>
                  </ol>
                  <strong>Technology</strong>
                  <p>
                    Our data is collected with web-based apps and delivered via
                    APIs to work with your current platform.
                  </p>
                  <strong>Social Impact</strong>
                  <p>
                    As a social impact company, Summery makes a data-driven
                    donation to a nonprofit organization representing the
                    collective values of all stakeholders.
                  </p>
                  <strong>For More Information:</strong>
                  <p>
                    To learn more about how your company can benefit from
                    expanded stakeholder engagement and greater cultural
                    alignment, contact Erin Michelson, Founder + CEO, Summery at
                    <a href="mailto:erin@summery.ai">erin@summery.ai</a>.
                  </p>
                </div>
              </template>
            </LazyAccordiansTransparent>
          </li>
          <li>
            <LazyAccordiansTransparent
              bodyclass="bg-white p-5 mt-4 mb-4"
              headerclass="p-0 cursor-pointer hover:underline"
            >
              <template #header>
                Situational Human Factors Benchmark~Stress Assessment
                Service</template
              >
              <template #content>
                <div class="mt-3 card card-body">
                  <strong>Overview</strong>
                  <p>
                    The SHFB~Stress Assessment is a survey and staff engagement
                    tool focusing upon the incidence of stress-related ill
                    health symptoms at a psychological and physical level of
                    staff, and its impact on productivity and absence rates.
                  </p>
                  <p>
                    It identifies the degree to which these symptoms are the
                    result of workplace causes or personal issues and
                    <strong>provides an estimated cost of the impact</strong> on
                    the organization as a whole and the groups concerned. This
                    enables management to develop targeted, custom interventions
                    to promote both individual and organizational well-being.
                  </p>
                  <p>
                    The SHFB~Stress Assessment can be run at any or all of the
                    site, team, business unit, and enterprise levels. In all
                    cases analyses are available by racial identity, gender
                    identity, age range, and salary band. Individual responses
                    are only shown in aggregated form for which the minimum
                    group size is 4, groups smaller than 4 will be included in
                    the next highest level analysis.
                  </p>
                  <p>
                    Given the multiple societal issues facing the country
                    today—Covid-19, equity and inclusion, environmental— the
                    SHFB~Stress Assessment provides actionable information on:
                  </p>
                  <ul>
                    <li>
                      The burnout and stress-related ill-health risks of
                      individuals with the ability to differentiate between
                      work- and personal-related stress
                    </li>
                    <li>
                      The level of personal resources available to cope with
                      adverse and stressful situations
                    </li>
                    <li>
                      The perceived reasons for stress e.g. relationships,
                      family, work, personal finances, health, social, and
                      environmental reasons
                    </li>
                    <li>Depression risk incidence</li>
                    <li>
                      Productivity and absence rates and associated cost to the
                      organization.
                    </li>
                  </ul>
                  <p>
                    Individual respondents receive their own confidential report
                    as soon as they complete the survey. Where an individual is
                    identified as being at Critical Risk, meaning that they are
                    at alarming risk of stress combined with low personal
                    well-being, the Service will offer the individual the
                    opportunity to discuss the report with a trained advisor.
                  </p>
                  <p>
                    The SHFB~Stress Assessment is a U.S. localized sub-set of
                    the Afriforte OHFB and maps to the following WELL v2
                    standards: M03 Part 1, M05, C05
                  </p>
                  <p>
                    For more information
                    <a href="mailto:info@InstituteforHealthyLeadership.com"
                      >info@InstituteforHealthyLeadership.com</a
                    >
                  </p>
                </div>
              </template>
            </LazyAccordiansTransparent>
          </li>
          <li>
            <LazyAccordiansTransparent
              bodyclass="bg-white p-5 mt-4 mb-4"
              headerclass="p-0 cursor-pointer hover:underline"
            >
              <template #header>Softer Success Burnout Tool </template>
              <template #content>
                <div>
                  <p>
                    A walk through the forest: Softer Success Wellbeing
                    Assessment is a 90 second wellbeing assessment and
                    psychometric test based on academic and scientific evidence
                    from Leuven University, Belgium, the World Health
                    Organisation, and Softer Success’ own research with King's
                    College London & Sheffield University. It is anonymous and
                    confidential to the user and measures risk of burnout,
                    productivity and engagement. It provides instant
                    personalised results with resources for employees and an
                    anonymised aggregated report for a company, team or
                    department. An evidence based diagnostic tool that helps
                    identify the risk of burnout in your organisation quickly.
                    We also offer an end to end service with the wellbeing
                    assessment, providing important aggregated data that can be
                    used by our professional consultants to propose appropriate
                    interventions and remedial actions in the form of
                    consultancy, training and master classes. Softer Success can
                    help companies to meet some key components of the 12
                    Competencies for Measuring Health and Well-being for Human
                    and Social Capital.
                  </p>
                  <p>
                    Engaged mind and body means in engaging with community and
                    with the world. One of our ethos is working towards climate
                    action. We support the UN Sustainable Development Goals on
                    Good health & Wellbeing, Decent Work, Climate Action and
                    global partnership for sustainable development.
                  </p>
                  <p>
                    <strong>Contact</strong>:
                    <a href="mailto:info@softersuccess.com"
                      >info@softersuccess.com</a
                    >
                  </p>
                  <p>+44 (0) 203 883 4493</p>
                </div>
              </template>
            </LazyAccordiansTransparent>
          </li>
        </ul>
      </div>
      <div class="underline italic text-gray-50 font-light mt-4">
        Features C04 and C05: New survey submissions
      </div>
      <div
        v-if="$i18n.locale === 'en'"
        class="text-gray-50 font-light leading-7 mb-4"
      >
        <p>
          Projects pursuing WELL Certification under WELL v2 may wish to submit
          surveys to be included on one of the pre-approved survey lists above.
          Projects may submit surveys for evaluation using
          <a href="https://iwbi.typeform.com/to/z4GgOcf7" target="_blank"
            >this form</a
          >. Please note: For WELL v2 pilot projects, the below list can be used
          in reference to features C03: Occupant Survey and C04: Enhanced
          Occupancy Survey. Submissions must include the following information:
        </p>
        <ul class="space-y-1 list-disc ml-8 -mt-4 mb-2">
          <li>Survey name</li>
          <li>Survey developer/administrator</li>
          <li>Topics covered by survey</li>
          <li>
            Qualifications and experience of personnel analyzing the survey
          </li>
          <li>
            Procedures in place to ensure the protection of participant data
          </li>
          <li>
            Purpose of submission:
            <ul class="space-y-1 list-circle ml-8">
              <li>
                To apply toward C04 Part 1 Option 1 Option 1 and C05 Part 1
                requirement a.
              </li>
              <li>To apply only toward C05 Part 1 requirement b.</li>
            </ul>
          </li>
        </ul>
        For any questions please contact
        <a
          href="mailto:surveys@wellcertified.com"
          target="_blank"
          class="text-gray-300 hover:underline"
          >surveys@wellcertified.com</a
        >.
      </div>
      <LazyAccordiansTransparent
        v-if="$i18n.locale === 'en'"
        bodyclass="bg-white p-5 mt-4 mb-4"
        headerclass="p-0 cursor-pointer hover:underline text-gray-300 font-light leading-7"
      >
        <template #header
          >Frequently Asked Questions on the review process for third-party
          survey providers in WELL v2 pilot & WELL v2
        </template>
        <template #content>
          <div>
            <ol>
              <li>
                <p>
                  <strong
                    >What are the current pre-approved third-party survey
                    providers for WELL?</strong
                  >
                </p>
                <p>
                  Both pre-approved survey providers and their listed survey
                  have been reviewed and approved by IWBI’s Research team to
                  meet minimum standards on quality, topics, content, and
                  privacy and confidentiality practices.
                </p>
              </li>
              <li>
                <p>
                  <strong
                    >Is there any cost to be a pre-approved survey provider for
                    WELL?</strong
                  >
                </p>
                <p>
                  No, there is no cost to be a pre-approved survey provider for
                  WELL v2 pilot or WELL v2.
                </p>
              </li>
              <li>
                <p>
                  <strong
                    >What can I expect when I submit my survey to IWBI to be
                    considered for pre-approval?</strong
                  >
                </p>
                <p>
                  Your survey and accompanying material will be evaluated by
                  IWBI’s Research team. If the Research team requires additional
                  information, they will reach out to request further
                  documentation. Once submitted, the Research team will identify
                  gaps and necessary adjustments and request that survey
                  providers make adjustments to their survey. If the survey
                  provider makes adjustments as needed to meet the Research
                  team’s minimum criteria, the final step in the approval
                  process requires the signing of a contract between IWBI and
                  the survey provider. Once the documentation is complete, the
                  survey is officially approved and will be listed as a
                  pre-approved survey for both WELL v2 pilot and WELL v2 on
                  IWBI’s
                  <a
                    href="https://well.support/pre-approved-programs~ca36f076-229e-438f-b23f-643626026f74"
                    target="_blank"
                    >pre-approved programs page</a
                  >
                  and in the appropriate Community survey feature(s) in the WELL
                  v2 pilot and WELL v2 digital standards.
                </p>
              </li>
              <li>
                <p>
                  <strong
                    >How long will the review and approval process take?</strong
                  >
                </p>
                <p>
                  The initial review by IWBI's Research team takes on average
                  two weeks from receiving the initial submission. Depending on
                  the need for additional documentation, the number of required
                  survey revisions, and how long the survey provider takes to
                  make and test those revisions and sign the contract with IWBI,
                  the overall process from submission to approval can average
                  between 3-6 months.
                </p>
              </li>
              <li>
                <p>
                  <strong
                    >What is the criteria used to evaluate submitted
                    surveys?</strong
                  >
                </p>
                <p>
                  Submitted surveys are evaluated based on survey content,
                  quality of metrics, and survey provider expertise,
                  responsiveness, and commitment to confidentiality.
                </p>
                <ul>
                  <li>
                    Content must cover at a minimum the topics listed in WELL v2
                    <a href="https://v2.wellcertified.com/" target="_blank"
                      >Appendix C1</a
                    >.
                  </li>
                  <li>
                    Survey questions must be robust, defensible, clearly
                    translated into English, evidence-based, and tested or
                    piloted before use.
                  </li>
                  <li>
                    The survey provider must demonstrate prior experience and
                    expertise – or collaboration with someone who has expertise
                    - in developing, managing, and evaluating surveys that deal
                    with human perceptions, attitudes, and behaviors. Note:
                    experience with marketing, internal human resources, or
                    public opinion surveys alone are insufficient
                    qualifications.
                  </li>
                  <li>
                    The survey provider must have the capacity to manage survey
                    deployment and analysis in a timely and professional manner.
                  </li>
                  <li>
                    The provider must also demonstrate that they take adequate
                    measures to protect participant identities and data and meet
                    all local and national privacy standards for human data.
                  </li>
                </ul>
                <p>
                  Surveys that do not meet the above minimum criteria will not
                  be approved for inclusion as a pre-approved survey for WELL
                  v2.
                </p>
              </li>
              <li>
                <p>
                  <strong
                    >What are some common reasons that surveys have been
                    rejected?</strong
                  >
                </p>
                <p>The most common reasons for rejection include:</p>
                <ul>
                  <li>
                    Survey does not meet the minimum criteria for topics
                    covered.
                  </li>
                  <li>
                    Survey does not meet minimum standards for survey question
                    quality.
                  </li>
                  <li>
                    Survey provider does not have the expertise and experience
                    to develop, manage, and evaluate surveys that deal with
                    human perceptions, attitudes and/or behaviors.
                  </li>
                  <li>
                    Survey provider has inadequate protections for participant
                    privacy.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong
                    >Once I am a pre-approved survey provider, what can I
                    expect?</strong
                  >
                </p>
                <p>
                  Once a provider is pre-approved, the survey is posted to the
                  pre-approved programs page, WELL v2 pilot and WELL v2 digital
                  standards, and Tools>Surveys page on wellcertified.com.
                </p>
                <p>
                  Each pre-approved survey provider is responsible for signing a
                  contract with and billing their WELL project, as with any
                  other client relationship. The WELL project submits the
                  pre-approved survey providers’ name as part of their
                  documentation to GBCI, Inc., the organization that reviews and
                  certifies WELL projects. The final results of the
                  post-occupancy survey must be submitted three to six months
                  after occupancy (or re-occupancy) of WELL Certified projects.
                </p>
              </li>
            </ol>
          </div>
        </template>
      </LazyAccordiansTransparent>
      <ul v-if="$i18n.locale === 'cn'" class="font-light text-gray-50">
        <li>
          加州大学伯克利分校建筑环境中心的乘员室内环境质量（IEQ）调查<sup>TM</sup>。
        </li>
        <li>建筑物评估调查建筑物使用研究（BUS）。</li>
        <li>澳大利亚建筑住户调查系统（BOSSA）。</li>
        <li>
          俄勒冈大学的空间性能评估问卷（SPEQ），高性能环境实验室（HiPE）。
        </li>
        <li>利斯曼指数（Leesman Index）。</li>
        <li>科罗拉多州立大学建筑环境研究所的住户舒适度与健康调查。</li>
      </ul>
    </section>
    <section class="mt-10 md:mt-20">
      <div v-if="$i18n.locale === 'en'">
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL v2: Gateways to Wellness
        </h2>
        <p class="text-gray-50 font-light leading-7">
          The following presents a list of health and wellness programs and
          initiatives that have been evaluated by IWBI and found to meet the
          criteria outlined in I04: Gateways to Wellness:
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>
            Living Building Challenge, v3: Health & Happiness Petal; v2.1:
            Health Petal (International Living Future Institute)
          </li>
          <li>
            Workplace Health Achievement Index (American Heart Association)
          </li>
          <li>Eat REAL Certified (Eat REAL)</li>
          <li>Fitwel (Center for Active Design)</li>
          <li>
            Healthy Building Certificate (Healthy Building World Institute)
          </li>
          <li>
            NABERS: 4 stars (or higher) in NABERS Indoor Environment (IE) (NSW
            Department of Planning, Industry and Environment, Australia)
          </li>
          <li>
            Assessment Standard for Healthy Building (T/ASC02-2016), Operating
            Label (Chinese Society for Urban Studies Green Building Research
            Center)
          </li>
          <li>
            WELL Building Standard (IWBI): available to projects undergoing
            recertification and upgrading to a more recent version of WELL
            (e.g., originally certified under WELL v1 and upgrading to WELL v2)
          </li>
        </ul>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program meets the following requirements:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-decimal ml-8 mb-2">
          <li>Addresses a minimum of three WELL Concepts.</li>
          <li>
            Primary goal is to advance the health and well-being of individuals
            or communities.
          </li>
          <li>
            Includes transparent development, rating and scoring or evaluation.
          </li>
          <li>
            Based on supporting scientific, medical and/or industry research.
          </li>
          <li>Viewable online at no cost.</li>
        </ol>
      </div>
      <div v-else>
        <h2 class="text-32 font-medium text-tertiary-1100">
          WELL v2：健康之门
        </h2>
        <p class="text-gray-50 font-light leading-7">
          以下是由IWBI评估过的健康项目和倡议清单，它们满足了I04：健康之门中列出的条件：
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>
            Living Building Challenge, v3: Health & Happiness Petal; v2.1:
            Health Petal (国际未来生活研究院)
          </li>
          <li>Workplace Health Achievement Index (美国心脏协会)</li>
          <li>Eat REAL Certified (Eat REAL)</li>
          <li>FitWel (有源设计中心)</li>
          <li>Healthy Building Certificate (健康建筑世界研究院)</li>
          <li>
            NABERS: 4 stars (or higher) in NABERS Indoor Environment (IE) (NSW
            Department of Planning, Industry and Environment, Australia)
          </li>
          <li>
            Assessment Standard for Healthy Building (T/ASC02-2016), Operating
            Label (Chinese Society for Urban Studies Green Building Research
            Center)
          </li>
        </ul>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program meets the following requirements:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-decimal ml-8 mb-2">
          <li>Addresses a minimum of three WELL Concepts.</li>
          <li>
            Primary goal is to advance the health and well-being of individuals
            or communities.
          </li>
          <li>
            Includes transparent development, rating and scoring or evaluation.
          </li>
          <li>
            Based on supporting scientific, medical and/or industry research.
          </li>
          <li>Viewable online at no cost.</li>
        </ol>
      </div>
    </section>
    <section class="mt-10 md:mt-20">
      <div v-if="$i18n.locale === 'en'">
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL Health-Safety Rating: Gateways to Health-Safety
        </h2>
        <p class="text-gray-50 font-light leading-7">
          The following presents a list of programs approved for feature
          <i>SI4: Gateways to Health-Safety</i>, the equivalent number of
          features each is worth, and Health-Safety features that are excluded
          from the scorecard of projects using each pathway.
        </p>
        <div class="overflow-x-auto mb-4">
          <table class="min-w-full table-auto border border-gray-900">
            <thead class="border border-gray-900">
              <tr>
                <td
                  style="width: 20%"
                  class="font-normal text-gray-50 p-3 border border-gray-900"
                >
                  Achievement
                </td>
                <td
                  style="width: 20%"
                  class="font-normal text-gray-50 p-3 border border-gray-900"
                >
                  Managing Organization
                </td>
                <td
                  style="width: 15%"
                  class="font-normal text-gray-50 p-3 border border-gray-900"
                >
                  Value
                </td>
                <td style="width: 45%" class="font-normal text-gray-50 p-3">
                  Exclusions
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="border border-gray-900">
                <td
                  style="width: 20%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  GBAC STAR Facility Accreditation
                </td>
                <td
                  style="width: 20%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  ISSA
                </td>
                <td
                  style="width: 15%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  5 features
                </td>
                <td
                  style="width: 45%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal"
                >
                  SC1: Support Handwashing<br />
                  SC2: Reduce Surface Contact<br />
                  SC3: Improve Cleaning Practices<br />
                  SC4: Select Preferred Cleaning Products<br />
                  SC5: Reduce Respiratory Particle Exposure<br />
                  SI3: Innovation III
                </td>
              </tr>
              <tr class="border border-gray-900">
                <td
                  style="width: 20%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  Assessment Standard for Healthy Building (T/ASC02-2016)
                </td>
                <td
                  style="width: 20%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  Chinese Society for Urban Studies Green Building Research
                  Center
                </td>
                <td
                  style="width: 15%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  1 feature
                </td>
                <td
                  style="width: 45%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal"
                >
                  SI3: Innovation III
                </td>
              </tr>
              <tr class="border border-gray-900">
                <td
                  style="width: 20%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  Yamanashi Green Zone Certification
                </td>
                <td
                  style="width: 20%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  Yamanashi Prefecture
                </td>
                <td
                  style="width: 15%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal border border-gray-900"
                >
                  4 features
                </td>
                <td
                  style="width: 45%"
                  class="text-gray-50 font-light p-3 whitespace-nowrap lg:whitespace-normal"
                >
                  - SC2: Reduce Surface Contact <br />
                  - SC5: Reduce Respiratory Particle Exposure<br />
                  - SA1: Assess Ventilation<br />
                  - SA2: Assess and Maintain Air Treatment Systems<br />
                  - SI3: Innovation III
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program meets the following requirements:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-decimal ml-8 mb-2">
          <li>
            Goal is to advance the health and safety of building occupants.
          </li>
          <li>
            Includes transparent development, rating and scoring or evaluation.
          </li>
          <li>Undergoes third-party review to confirm achievement.</li>
          <li>
            Based on supporting scientific, medical and/or industry research.
          </li>
        </ol>
        <p class="text-gray-50 font-light leading-7">
          In addition, projects must identify any features within the WELL
          Health-Safety Rating that may align with the program and clearly
          specify the corresponding section in the program. This information
          will help the review team determine the equivalent number of features
          this program is worth, as well as the WELL Health-Safety features that
          will be excluded from the project's scorecard. An English translation
          of the relevant sections within the program is also required.
        </p>
      </div>
      <div v-else>
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL Health-Safety Rating: Gateways to Health-Safety
        </h2>
        <p class="text-gray-50 font-light leading-7">
          The following presents a list of programs approved for feature
          <i>SI4: Gateways to Health-Safety</i>, the equivalent number of
          features each is worth, and Health-Safety features that are excluded
          from the scorecard of projects using each pathway.
        </p>
        <table class="table-auto border border-gray-900 text-gray-50">
          <tbody>
            <tr class="border border-gray-900 p-3">
              <td
                style="width: 20% padding:12px"
                class="border border-gray-900 p-3"
              >
                Achievement
              </td>
              <td style="width: 20%" class="border border-gray-900 p-3">
                Managing Organization
              </td>
              <td style="width: 15%" class="border border-gray-900 p-3">
                Value
              </td>
              <td style="width: 45%" class="border border-gray-900 p-3">
                Exclusions
              </td>
            </tr>
            <tr class="font-light border border-gray-900 p-3">
              <td style="width: 20%" class="border border-gray-900 p-3">
                GBAC STAR Facility Accreditation
              </td>
              <td style="width: 20%" class="border border-gray-900 p-3">
                ISSA
              </td>
              <td style="width: 15%" class="border border-gray-900 p-3">
                5 features
              </td>
              <td style="width: 45%" class="border border-gray-900 p-3">
                SC1: Support Handwashing<br />
                SC2: Reduce Surface Contact<br />
                SC3: Improve Cleaning Practices<br />
                SC4: Select Preferred Cleaning Products<br />
                SC5: Reduce Respiratory Particle Exposure<br />
                SI3: Innovation III
              </td>
            </tr>
            <tr class="font-light border border-gray-900 p-3">
              <td style="width: 20%" class="border border-gray-900 p-3">
                Assessment Standard for Healthy Building (T/ASC02-2016)
              </td>
              <td style="width: 20%" class="border border-gray-900 p-3">
                Chinese Society for Urban Studies Green Building Research Center
              </td>
              <td style="width: 15%" class="border border-gray-900 p-3">
                1 feature
              </td>
              <td style="width: 45%" class="border border-gray-900 p-3">
                SI3: Innovation III
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program meets the following requirements:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-decimal ml-8 mb-2">
          <li>
            Goal is to advance the health and safety of building occupants.
          </li>
          <li>
            Includes transparent development, rating and scoring or evaluation.
          </li>
          <li>Undergoes third-party review to confirm achievement.</li>
          <li>
            Based on supporting scientific, medical and/or industry research.
          </li>
        </ol>
        <p class="text-gray-50 font-light leading-7">
          In addition, projects must identify any features within the WELL
          Health-Safety Rating that may align with the program and clearly
          specify the corresponding section in the program. This information
          will help the review team determine the equivalent number of features
          this program is worth, as well as the WELL Health-Safety features that
          will be excluded from the project's scorecard. An English translation
          of the relevant sections within the program is also required.
        </p>
      </div>
    </section>
    <section class="mt-10 md:mt-20">
      <div v-if="$i18n.locale === 'en'">
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL Community Standard: Health and Wellness Rating Systems
        </h2>
        <p class="text-gray-50 font-light leading-7">
          The following presents a list of health and wellness rating systems
          that have been evaluated by IWBI and found to meet the criteria
          outlined by the certified building requirements of the WELL Community
          Standard:
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>WELL Building Standard (IWBI)</li>
          <li>Living Building Challenge (ILFI)</li>
          <li>
            Petal Certification (ILFI): any petal combination which includes
            Health and Happiness
          </li>
          <li>Home Performance Index (Irish Green Building Council)</li>
        </ul>
      </div>
      <div v-else>
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL 社区标准：健康评估体系
        </h2>
        <p class="text-gray-50 font-light leading-7">
          以下是由IWBI评估过的健康评估体系清单，它们满足了WELL
          社区标准中列出的对认证建筑的要求：
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>WELL 建筑标准（IWBI)</li>
          <li>Living Building Challenge (ILFI)</li>
          <li>Petal Certification (ILFI): 任何包括健康和幸福感的petal组合</li>
          <li>Home Performance Index (Irish Green Building Council)</li>
        </ul>
      </div>
    </section>
    <section class="mt-10 md:mt-20">
      <div v-if="$i18n.locale === 'en'">
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL v2 and the WELL Community Standard: Green Rating Systems
        </h2>
        <p class="text-gray-50 font-light leading-7">
          The following presents a list of green rating systems that have been
          evaluated by IWBI and found to meet the criteria outlined by the
          certified building requirements of WELL v2 Feature I05: Green Building
          Rating Systems and the WELL Community Standard:
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>LEED (USGBC)</li>
          <li>BREEAM (BRE)</li>
          <li>Green Star (GBCA)</li>
          <li>
            Petal Certification (ILFI): any petal combination which does not
            include Health and Happiness
          </li>
          <li>Zero Energy Certification (ILFI)</li>
          <li>HQE (Certivéa)</li>
          <li>Home Performance Index (Irish Green Building Council)</li>
          <li>NF Habitat HQE (Cerqual)</li>
          <li>BEAM Plus (Hong Kong Green Building Council)</li>
          <li>
            GB/T 50378, Operation Stage (Ministry of Housing and Urban-Rural
            Development)
          </li>
          <li>DGNB (German Sustainable Building Council)</li>
          <li>Miljöbyggnad (Sweden Green Building Council)</li>
          <li>
            BCA Green Mark (Singapore’s Building and Construction Authority)
          </li>
          <li>
            GBS Green Building Standard (Poland National Sustainable Building
            Support Association, OSWBZ)
          </li>
          <li>GPR Gebouw (W/E Consultants, Netherlands)</li>
          <li>Minergie-ECO (Minergie and Eco-bau, Switzerland)</li>
          <li>
            NABERS: 4.5 stars (or higher) in NABERS Energy, 4 stars (or higher)
            in NABERS Water and 4 stars (or higher) in NABERS Waste (NSW
            Department of Planning, Industry and Environment, Australia)
          </li>
          <li>
            IGBC Green New Buildings Rating System, version 3.0 (Indian Green
            Building Council)
          </li>
          <li>SKA Rating (RICS, United Kingdom)</li>
          <li>Home Quality Mark ONE (BRE)</li>
          <li>Green Star (NZGBC)</li>
          <li>Green Globes (GBI)</li>
          <li>Green Building Index (Greenbuildingindex Sdn Bhd, Malaysia)</li>
          <li>Global Sustainability Assessment System (GSAS Trust)</li>
          <li>
            Code for Sustainable Homes (UK Department for Communities and Local
            Government)
          </li>
        </ul>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program meets the following requirements:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-loweralpha ml-8 mb-2">
          <li>
            Primary goal is to advance sustainability and green practices in
            built spaces.
          </li>
          <li>Demonstrates leadership and innovation.</li>
          <li>
            Includes transparent development, rating and scoring processes.
          </li>
          <li>Undergoes third-party review to confirm achievement.</li>
          <li>
            Based on supporting scientific, medical and/or industry research.
          </li>
          <li>Viewable online at no cost.</li>
          <li>
            Addresses at least three of the objectives below:
            <ol
              class="text-gray-50 font-light leading-7 list-decimal ml-8 mb-2"
            >
              <li>Reduce contribution to global climate change.<sup>1</sup></li>
              <li>
                Enhance individual human health, well-being and vitality.<sup
                  >1</sup
                >
              </li>
              <li>Protect and restore water resources.<sup>1</sup></li>
              <li>
                Protect, enhance and restore biodiversity and ecosystem
                services.<sup>1</sup>
              </li>
              <li>
                Promote sustainable and regenerative material resource
                cycles.<sup>1</sup>
              </li>
              <li>Build a greener economy.<sup>1</sup></li>
              <li>
                Enhance community through social equity, environmental justice
                and quality of life.<sup>1</sup>
              </li>
            </ol>
          </li>
        </ol>
        <p class="font-light text-base text-gray-50 leading-7">
          <sup>1</sup> U.S. Green Building Council. LEED v4 Impact Category and
          Point Allocation Development Process.
        </p>
      </div>
      <div v-else>
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL 社区标准：绿色评估体系
        </h2>
        <p class="text-gray-50 font-light leading-7">
          以下是由IWBI评估过的绿色评估体系清单，它们满足了WELL
          社区标准中列出的对认证建筑的要求：
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>LEED (USGBC)</li>
          <li>BREEAM (BRE)</li>
          <li>绿色之星 (GBCA)</li>
          <li>Petal Certification (ILFI): 任何不包括健康和幸福感的petal组合</li>
          <li>零排放认证 Zero Energy Certification (ILFI)</li>
          <li>HQE (Certivéa)</li>
          <li>
            住宅性能指数 Home Performance Index (Irish Green Building Council)
          </li>
          <li>NF Habitat HQE (Cerqual)</li>
          <li>BEAM Plus (Hong Kong Green Building Council)</li>
          <li>
            GB/T 50378, Operation Stage (Ministry of Housing and Urban-Rural
            Development)
          </li>
          <li>DGNB (German Sustainable Building Council)</li>
          <li>Miljöbyggnad (Sweden Green Building Council)</li>
          <li>
            BCA Green Mark (Singapore’s Building and Construction Authority)
          </li>
          <li>
            GBS Green Building Standard (Poland National Sustainable Building
            Support Association, OSWBZ)
          </li>
          <li>GPR Gebouw (W/E Consultants, Netherlands)</li>
          <li>Minergie-ECO (Minergie and Eco-bau, Switzerland)</li>
          <li>
            NABERS: 4.5 stars (or higher) in NABERS Energy, 4 stars (or higher)
            in NABERS Water and 4 stars (or higher) in NABERS Waste (NSW
            Department of Planning, Industry and Environment, Australia)
          </li>
          <li>
            IGBC Green New Buildings Rating System, version 3.0 (Indian Green
            Building Council)
          </li>
          <li>SKA Rating (RICS, United Kingdom)</li>
          <li>Home Quality Mark ONE (BRE)</li>
          <li>Green Star (NZGBC)</li>
          <li>Green Globes (GBI)</li>
          <li>Green Building Index (Greenbuildingindex Sdn Bhd, Malaysia)</li>
        </ul>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program meets the following requirements:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-loweralpha ml-8 mb-2">
          <li>
            Primary goal is to advance sustainability and green practices in
            built spaces.
          </li>
          <li>Demonstrates leadership and innovation.</li>
          <li>
            Includes transparent development, rating and scoring processes.
          </li>
          <li>Undergoes third-party review to confirm achievement.</li>
          <li>
            Based on supporting scientific, medical and/or industry research.
          </li>
          <li>Viewable online at no cost.</li>
          <li>
            Addresses at least three of the objectives below:
            <ol
              class="text-gray-50 font-light leading-7 list-decimal ml-8 mb-2"
            >
              <li>Reduce contribution to global climate change.<sup>1</sup></li>
              <li>
                Enhance individual human health, well-being and vitality.<sup
                  >1</sup
                >
              </li>
              <li>Protect and restore water resources.<sup>1</sup></li>
              <li>
                Protect, enhance and restore biodiversity and ecosystem
                services.<sup>1</sup>
              </li>
              <li>
                Promote sustainable and regenerative material resource
                cycles.<sup>1</sup>
              </li>
              <li>Build a greener economy.<sup>1</sup></li>
              <li>
                Enhance community through social equity, environmental justice
                and quality of life.<sup>1</sup>
              </li>
            </ol>
          </li>
        </ol>
        <p class="font-light text-base text-gray-50 mb-4">
          <sup>1</sup> U.S. Green Building Council. LEED v4 Impact Category and
          Point Allocation Development Process.
        </p>
      </div>
    </section>
    <section class="mt-10 md:mt-20">
      <div v-if="$i18n.locale === 'en'">
        <h2 class="font-medium text-28 md:text-32 text-gray-300 mb-4">
          WELL v2: Diversity and Inclusion Programs
        </h2>
        <p class="text-gray-50 font-light leading-7">
          The following presents a list of programs that have been evaluated by
          IWBI and found to meet the criteria for achieving Option 1 of WELL v2
          Feature C12: Diversity and Inclusion:
        </p>
        <ul class="text-gray-50 font-light leading-7 list-disc ml-8 mb-2">
          <li>JUST (ILFI).</li>
          <li>B Corporation (B Lab).</li>
          <li>
            GRI Standards, including the Universal Standards and at minimum the
            Non-Discrimination and Diversity and Equal Opportunity Standards
            (Global Reporting Initiative).
          </li>
          <li>ESG Reporting Guideline (Hong Kong Stock Exchange)</li>
        </ul>
        <p class="text-gray-50 font-light leading-7">
          Projects may wish to submit a program to be considered for inclusion
          in the list above. Those projects must submit an Equivalency Proposal
          documenting how the program covers at least three of the following
          topics:
        </p>
        <ol class="text-gray-50 font-light leading-7 list-decimal ml-8">
          <li>Diversity, inclusion and/or non-discrimination policy.</li>
          <li>
            Equitable and transparent hiring, evaluation and/or promotion
            practices.
          </li>
          <li>
            Non-discrimination, including discrimination and harassment
            reporting procedures.
          </li>
          <li>
            Diversity of representation in mid- and executive-level leadership
            positions.
          </li>
          <li>
            Pay equity and transparency (e.g., compensation scale equity, living
            wage, gender and ethnic pay equity).
          </li>
          <li>
            Employee training on diversity, inclusion, and/or reducing implicit
            bias.
          </li>
          <li>Employee resource groups and/or sponsorship programs.</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    if (this.$route.path.includes('en/resources/preapproved-programs')) {
      this.loading = false
      window.location.href =
        'https://well.support/pre-approved-programs~ca36f076-229e-438f-b23f-643626026f74'
      setTimeout(() => {
        this.loading = true
      }, 2000)
    }
  },
}
</script>

<style scoped>
a {
  word-break: break-all;
}
</style>
