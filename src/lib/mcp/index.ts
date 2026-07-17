import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get_profile";
import listProjects from "./tools/list_projects";
import getProject from "./tools/get_project";
import listCapabilities from "./tools/list_capabilities";
import getExperience from "./tools/get_experience";
import getStack from "./tools/get_stack";

export default defineMcp({
  name: "sebastian-jaimes-portfolio",
  title: "Sebastián Jaimes — Portfolio",
  version: "0.1.0",
  instructions:
    "Public read-only tools for Sebastián Jaimes' portfolio. Use `get_profile` for bio and focus areas, `list_projects` / `get_project` for case studies, `list_capabilities` for services, `get_experience` for the work timeline, and `get_stack` for the toolset.",
  tools: [getProfile, listProjects, getProject, listCapabilities, getExperience, getStack],
});