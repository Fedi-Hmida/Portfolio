import { getHomeProjects } from "./projects";

test("merges Home content items with project data, keeping the content order", () => {
  const out = getHomeProjects([{ id: 9, role: "Backend owner" }, { id: 7, role: "Co-lead" }]);
  expect(out.map((p) => p.id)).toEqual([9, 7]);
  expect(out[0]).toMatchObject({ title: "CallVerse", link: "/portfolio/callverse", role: "Backend owner" });
  expect(out[1]).toMatchObject({ title: "SMART HRM AI", link: "/portfolio/smart-hrm-ai" });
});

test("only projects with public code carry a githubUrl", () => {
  const [callVerse, smartHrm, campusFlow] = getHomeProjects([{ id: 9 }, { id: 7 }, { id: 8 }]);
  expect(callVerse.githubUrl).toBe("https://github.com/Fedi-Hmida/callverse-backend");
  expect(smartHrm.githubUrl).toBeUndefined();
  expect(campusFlow.githubUrl).toBe("https://github.com/Fedi-Hmida/CampusFlow_AI");
});

test("an unknown project id fails loudly instead of rendering an empty row", () => {
  expect(() => getHomeProjects([{ id: 42 }])).toThrow("Unknown project id 42");
});
