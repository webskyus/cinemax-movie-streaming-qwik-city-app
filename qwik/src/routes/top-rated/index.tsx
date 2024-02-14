import { component$ } from "@builder.io/qwik";
import { ContentList } from "~/components/content-list";
import { CATEGORY } from "~/components/ui/header";
import { HeadBanner } from "~/components/head-banner";

export default component$(() => {
  return (
    <section class={"pb-[96px] text-white"}>
      {/*POPULAR TV BANNER*/}
      <HeadBanner type={CATEGORY.MOVIE} />

      {/*MOVIE*/}
      <ContentList type={CATEGORY.TOP_RATED_MOVIE} page={1} />

      {/*TV SHOW*/}
      <ContentList type={CATEGORY.TOP_RATED_TV_SHOW} page={1} />
    </section>
  );
});
