import { MDXRemote } from "next-mdx-remote/rsc";

type ProjectContentProps = {
    content: string;
};

// MDX 안에서 사용되는 HTML 태그들에 자동으로 디자인을 입혀주는 설정입니다. 👇
const mdxComponents = {
    iframe: (props: any) => (
        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg">
            <iframe {...props} className="absolute top-0 left-0 w-full h-full" />
        </div>
    ),
};

export default function ProjectContent({ content }: ProjectContentProps) {
    return (
        <>
            <p className="text-base md:text-lg text-white/50 font-semibold mb-4">프로젝트 설명</p>
            <section className="prose prose-invert lg:prose-lg max-w-none">
                <MDXRemote source={content} />
            </section>
        </>
    )
}