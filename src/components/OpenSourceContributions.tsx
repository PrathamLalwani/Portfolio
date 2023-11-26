import { Contributions } from "../assets/resume.json"
import { Element } from "react-scroll"


type RepoProps = {
  img_path: string,
  repoName: string,
  description: string,
  mergedPRs: string[],
  githubLink: string,
}

const RepoCard = (props: RepoProps) => {
  return (
    <div className="flex h-fit w-fit flex-col items-center mr-5 mb-10 rounded-2xl border-2 border-slate-400/50 bg-background-50 bg-opacity-10 px-3 py-5 backdrop-blur-md transition-all ease-in-out hover:shadow-2xl hover:shadow-primary sm:p-5 md:items-start">
      <a href={props.githubLink} target="_blank">
        <div className="h-20 w-52 shrink-0 rounded-md sm:h-52 sm:w-64 md:h-52 md:w-96 ">
          <img
            src={props.img_path}
            alt={props.repoName}
            className="h-full w-full rounded-md bg-center object-contain"
          />
        </div>
        <div className="flex w-52 flex-col sm:w-64 md:w-96">
          <h4 className="my-2 text-xl text-primary">{props.repoName}</h4>
          <p className="py-2 text-sm text-text sm:text-base">
            {props.description}
          </p>
        </div>
      </a>
    </div >)
}


const OpenSourceContributionSection = () => {
  return (
    <Element name="OpenSourceContributions">
      <section>
        <h2 className="mb-12 text-5xl font-bold text-text">Open Source Contributions</h2>
        <div className="flex flex-row flex-wrap">
          {Contributions.map((repo) => {
            return (
              <RepoCard
                key={repo.repoName}
                img_path={repo.img_path}
                repoName={repo.repoName}
                description={repo.description}
                githubLink={repo.githubLink}
                mergedPRs={repo.links}
              ></RepoCard>
            );
          })}
        </div>
      </section>
    </Element>
  )
}

export default OpenSourceContributionSection
