// src/features/Project/sections/projectSection.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/features/Project/components/projectCard";
import { ProjectLink } from "@/types/projectLink";
import { staggerHalf } from "@/constants/motion";
import { PROJECT_LIST } from "@/constants/project";

export default function ProjectSection() {
  // 처음부터 다 보여줄 것이므로 개수를 제한하던 useState와 함수들을 모두 삭제했습니다.

  return (
    <div className="flex flex-col w-full items-center">
      <p className="text-3xl text-white text-center font-semibold mt-48 mb-12">
        프로젝트
      </p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerHalf}
        >
          {/* slice 함수를 빼고 PROJECT_LIST 전체를 바로 map으로 뿌려줍니다. */}
          {PROJECT_LIST.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              img={`/images/project/${project.id}/thumbnail.${
                project.thumbnailFormat || "webp"
              }`}
              title={project.title}
              subTitle={project.subTitle}
              links={project.links as ProjectLink[]}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {/* 더보기 버튼 코드도 삭제되었습니다. */}
    </div>
  );
}