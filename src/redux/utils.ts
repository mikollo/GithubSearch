import { GithubSearchItemInterface } from "../utils/githubSearchItemInterface";

export function selectDataFromSearchResult(
  searchItem: GithubSearchItemInterface
) {
  return {
    starCount: searchItem.stargazers_count,
    fullName: searchItem.full_name,
    avatar: searchItem.owner.avatar_url,
    repoLink: searchItem.html_url,
    picked: false,
    id: searchItem.id
  };
}

export function sortSearchResults(
  someSearchItem: GithubSearchItemInterface,
  otherSearchItem: GithubSearchItemInterface
) {
  return (
    Number(new Date(someSearchItem.created_at)) -
    Number(new Date(otherSearchItem.created_at))
  );
}
