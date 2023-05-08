const Resume = () => {
  return (
      <div className="w-1/2 translate-x-1/2 p-6">
        <h1 className="mb-4 text-center text-2xl text-emerald-200">
          August Dolan
        </h1>
        <ul className="mb-3 flex flex-auto flex-row flex-wrap justify-around">
          <li>
            <b>Location:</b> Boston, MA
          </li>
          <li>
            <b>Phone:</b> <a href="tel:+17815790487">781-579-0487</a>
          </li>
          <li>
            <b>Email:</b>{" "}
            <a href="mailto: august.dolan1@gmail.com">
              august.dolan1@gmail.com
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="http://www.github.com/augustdolan"
              target="_blank"
            >
              <b>Github:</b> http://www.github.com/augustdolan
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/august-dolan/"
              target="_blank"
            >
              <b>LinkedIn:</b> https://www.linkedin.com/in/august-dolan
            </a>
          </li>
        </ul>
        <h2 className="mb-3 text-xl text-emerald-200">
          Professional Experience
        </h2>
        <h3 className="mb-2">
          <b>Cimpress</b> | Software Engineer II
        </h3>
        <ul className="mb-2 list-disc">
          <li>
            Full stack engineer for $2 billion ecommerce platform - one of only
            two routing domain experts for applications supporting thousands of
            transactions everyday
          </li>
          <li>
            Reduced support requests by 90%, saving 10+ engineer hours a week by
            researching and making machine readable common errors to automate
            their solutions
          </li>
          <li>
            Wrote new routing configuration microservice that combined siloed
            routing strategy microservices into highly composable and powerful
            configurations, then migrated tens of millions of product variants
            to it with no downtime
          </li>
          <li>
            Centralized continuous deployment for 30+ applications using custom
            terraform module and gitlab yaml files
          </li>
          <li>
            Spearheaded redesign of routing, leading half of user interviews and
            early engineer modeling task force
          </li>
          <li>
            Pushed, implemented, and discussed Domain Driven Design techniques,
            unifying language amongst users, engineers, and in code, reducing
            silent misunderstandings and code errors among team of six engineers
          </li>
          <li>
            Consistently contributed to company-wide and team-level Express.js
            middleware systems
          </li>
        </ul>
        <h3 className="mb-2">
          <b>Cimpress</b> | Software Engineer I
        </h3>
        <ul className="mb-2 list-disc">
          <li>
            Responsible for all support requests one week every month, handling
            5-10 requests daily
          </li>
          <li>
            Implemented react router integration across frontends, enabling
            links to other UIs based on product sku
          </li>
          <li>
            Wrote rigorous unit, integration, and system tests for 100% coverage
            with nock and dependency injection
          </li>
          <li>
            Built frontend, internal open source component that automatically
            fetches accounts with user permissions, as part of domain wide
            effort to key product configurations off of buyer account and
            product sku
          </li>
        </ul>
        <h2 className="mb-3 text-xl text-emerald-200">Projects</h2>
        <h3 className="mb-2">
          <b>Tarjay</b>
        </h3>
        <ul className="mb-2 list-disc">
          <li>
            Webscaled legacy application to {">"}1k RPS for millions of products
            with 80ms of latency and {"<"}1% error rate
          </li>
          <li>
            Built Docker containers and Nginx load balancer to deploy full
            application on just 6 EC2 micro instances, keeping monthly server
            costs to $50
          </li>
          <li>
            Utilized k6 and Loader.io load testing with New Relic reporting to
            inform database selection, development, and deployment, improving
            legacy code from {">"}1500ms at 100 RPS in three weeks of agile
            development.
          </li>
        </ul>
        <h2 className="mb-3 text-xl text-emerald-200">Technical Skills</h2>
        <ul className="mb-2 list-disc">
          <li>
            <b>Frontend</b> | Javascript (ES5, ES6+), CSS, React, Next.js,
            Emotion/Styled Components, React Router, React Query
          </li>
          <li>
            <b>Backend</b> | Node.js/Express, PostgreSQL, AWS, MongoDB, MySQL,
            Cassandra, Socket.io, nock
          </li>
          <li>
            <b>Other</b> | Docker, Terraform, git, webpack/babel, TDD, Agile,
            Jest, Loader.io, k6, New Relic, Domain Driven Design
          </li>
        </ul>
        <h2 className="mb-3 text-xl text-emerald-200">Education</h2>
        <ul>
          <li>
            Hack Reactor, <i>Advanced Software Engineering Immersive Program</i>
          </li>
          <li>
            University of Massachusetts Boston,{" "}
            <i>
              B.A in Philosophy & Economics,Summa Cum Laude, Distinction in
              Economics, Top Honors in Philosophy, Club President
            </i>
          </li>
        </ul>
      </div>
  );
};

export default Resume;
