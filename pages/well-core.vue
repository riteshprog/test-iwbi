<template>
  <div style="background: rgb(248, 247, 247)" class="pt-10 md:pt-20 pb-6">
    <div class="lg:max-w-4xl mx-auto px-4 lg:px-0">
      <div v-if="$i18n.locale === 'en'">
        <h1
          class="
            text-center
            font-medium
            text-32
            md:text-40
            text-gray-300
            font-museo-slab
            mb-4
            md:mb-6
          "
        >
          WELL<sup>&trade;</sup> Core
        </h1>
        <p class="text-gray-50 font-light leading-7">
          WELL Core Certification is a distinct pathway of achievement for core
          and shell buildings seeking to implement fundamental features in the
          base building for the benefit of tenants/residents. All building types
          can register for WELL Core provided that at least 75% of the project
          area is occupied by one or more tenants/residents and/or serves as
          common space in the building accessible to all tenants/residents. Note
          that offices affiliated with the project owner but unrelated to the
          management of the project property may be considered a tenant so long
          as additional tenants unaffiliated with the project owner occupy at
          least 60% of the gross floor area.
        </p>
        <p class="text-gray-50 font-light leading-7">
          Residential buildings must meet one of the additional requirements to
          able to register for WELL Core:
        </p>
        <ol
          class="space-y-1 list-decimal ml-8 text-gray-50 font-light leading-7"
        >
          <li>
            There is minimal fit-out of the dwelling units, defined as meeting
            at least two of the following:
            <ol
              class="
                space-y-1
                list-loweralpha
                ml-8
                text-gray-50
                font-light
                leading-7
              "
            >
              <li>Developer does not install kitchen cabinets.</li>
              <li>
                Developer does not install stoves/ranges, ovens, or
                refrigerators.
              </li>
              <li>
                Developer does not install showers/baths, toilets, or sinks in
                the bathroom or kitchen.
              </li>
              <li>Developer does not install HVAC terminals.</li>
            </ol>
          </li>
          <li>
            Project is unable to provide access to dwelling units for
            performance testing. Projects must submit evidence attesting to why
            they are unable to test in dwelling units (for instance, dwelling
            units are already occupied).
          </li>
        </ol>
        <p class="text-gray-50 font-light leading-7 mt-4">
          Mixed-use buildings where WELL Core is appropriate for at least 60% of
          the gross floor area may register the entire building for WELL Core.
          Areas operated/occupied by the project owner are considered
          “non-leased space” (see Scope and Applicability below). Mixed-use
          buildings where WELL Core is appropriate for less than 60% of the
          gross floor area should register one or more portions of the building
          as individual projects for WELL Certification or WELL Core
          Certification, as appropriate.
        </p>
        <h5 class="text-xl leading-6 text-gray-50 font-medium mb-2">Scope</h5>
        <p class="text-gray-50 font-light leading-7">
          At least 2.5% of the total building floor area must be available for
          performance testing. The available testing area must include all
          common areas and spaces directly under the control of the building
          management team. If common areas and spaces under owner control
          comprise less than 2.5% of total building floor area, the project must
          supplement with tenant spaces to reach this threshold. Testing in
          leased spaces in these cases can take place before or after tenant
          occupancy.
        </p>
        <p class="text-gray-50 font-light leading-7">
          Some performance-based optimizations explicitly state that they
          require testing in tenant spaces in order to be awarded. The project
          is responsible for identifying and communicating to GBCI and the WELL
          Performance Testing Agent the particular spaces which are available
          for testing.
        </p>
        <h5 class="text-xl leading-6 text-gray-50 font-medium mb-2">
          Applicability
        </h5>
        <p class="text-gray-50 font-light leading-7">
          WELL Core requires, at minimum, achievement of certain features
          directed at common areas and spaces under owner control. Some features
          must be achieved for the entire building in order for the WELL Core
          project to receive credit. WELL Core projects may earn additional
          points for achieving those same features for tenants/residents,
          whether by directly offering benefits to tenants or sizing for tenant
          capacity. Further guidance on applicability and additional
          point-earning potential for WELL Core is provided in
          <a
            class="text-blue-1700 hover:text-blue-1200"
            href="https://v2.wellcertified.com/v/en/appendix/core-mfr"
            target="_blank"
            >Appendix Core and Multifamily Residential</a
          >.
        </p>
        <h5 class="text-xl leading-6 text-gray-50 font-medium mb-2">
          Certification Levels
        </h5>
        <p class="text-gray-50 font-light leading-7">
          WELL Core projects must achieve all preconditions as well as a certain
          number of points to earn different levels of certification:
        </p>
        <ul class="space-y-1 list-disc ml-8 text-gray-50 font-light">
          <li>WELL Core Bronze Certification: 40 points.</li>
          <li>WELL Core Silver Certification: 50 points.</li>
          <li>WELL Core Gold Certification: 60 points.</li>
          <li>WELL Core Platinum Certification: 80 points.</li>
        </ul>
        <p class="text-gray-50 font-light leading-7 mt-4">
          For WELL Core Certification, projects must earn a minimum of one point
          per concept. Projects may earn no more than 12 points per concept.
        </p>
      </div>
      <div v-else>
        <h1
          class="
            text-center
            font-medium
            text-32
            md:text-40
            text-gray-300
            font-museo-slab
            mb-4
            md:mb-6
          "
        >
          核心体WELL 认证项目
        </h1>
        <p class="text-gray-50 font-light leading-7">
          核心体WELL认证以住户的利益为根本，让基本建筑应用基础条款，为核心与外壳建筑实现WELL提供了独特的路径。所有建筑类型都可以注册追求核心体WELL认证，前提是至少
          75%
          的项目面积空间则由由一位或多位租户使用，和/或作为建筑内的公用空间供所有租户访问。请注意，与项目业主有关但与项目物业管理无关的办公室可能被视为租户，只要至少有一位其他租户与项目业主无关。
        </p>
        <p class="text-gray-50 font-light leading-7">
          住宅类建筑必须满足以下额外要求之一，才能注册核心体WELL认证。
        </p>
        <ol
          class="space-y-1 list-decimal ml-8 text-gray-50 font-light leading-7"
        >
          <li>
            住宅单元的最低装修标准必须满足以下至少两项：
            <ol
              class="
                space-y-1
                list-loweralpha
                ml-8
                text-gray-50
                font-light
                leading-7
              "
            >
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
        <p class="text-gray-50 font-light leading-7">
          对于混合功能建筑，若核心体WELL认证适用的面积达到总建筑面积的60%或以上，可将整栋建筑注册为核心体WELL认证。由项目业主运营/使用的面积被认定为“非租户区域”（见下文“范围”和“适用性”）。
          若核心体WELL认证适用的面积不足总建筑面积的60%，应视适用情况，将该建筑的一个或多个部分注册为单独的WELL认证项目或核心体WELL认证项目。
        </p>

        <h4 class="text-xl leading-6 text-gray-50 font-medium mb-2">范围</h4>
        <p class="text-gray-50 font-light leading-7">
          建筑物总面积的至少2.5％必须作为可进行性能测试的空间。可用的测试区域必须包括直接由物业管理团队控制的所有公共区域和空间。如果业主控制下的公共区域和空间不到总建筑面积的2.5％，则该项目必须用住户空间来补足来达到比例要求。
        </p>

        <h4 class="text-xl leading-6 text-gray-50 font-medium mb-2">适用性</h4>
        <p class="text-gray-50 font-light leading-7">
          核心体WELL认证项目可以就某些条款的要求为住户赢得分数。业主可以直接把得分需要兑现的福利做出来，也可以预留空间给客户，以便客户未来实现这些条款。我们在线在附录核心体中提供对核心体WELL
          项目的适用性和额外得分点可能性的进一步指导。
        </p>

        <h4 class="text-xl leading-6 text-gray-50 font-medium mb-2">
          认证等级
        </h4>
        <p class="text-gray-50 font-light leading-7">
          核心体 WELL
          项目必须达到所有先决条件和一定数量的分值才能获得不同级别的认证：
        </p>
        <ul class="space-y-1 list-disc ml-8 text-gray-50 font-light">
          <li>核心体WELL 认证：40 分。</li>
          <li>核心体WELL 认证 – 银级：50 分。</li>
          <li>核心体WELL 认证 – 金级：60 分。</li>
          <li>核心体WELL 认证 – 铂金级：80 分。</li>
        </ul>
        <p class="text-gray-50 font-light leading-7 mt-4">
          对于核心体WELL
          认证，项目在每个概念上至少获得一分。项目在每个概念上的得分不得超过12分。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
