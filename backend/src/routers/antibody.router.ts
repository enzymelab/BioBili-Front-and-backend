import { AntibodyModel } from './../models/antibody.model';
import { Router } from "express";
import { sample_antibody, sample_tags } from "../data";
import asynceHandler from 'express-async-handler';
const router = Router();

router.get("/seed", asynceHandler(
  async (req, res) => {
    const antibodyCount = await AntibodyModel.countDocuments();
    if (antibodyCount > 0) {
      res.send("Seed is already done");
      return;
    }
    await AntibodyModel.create(sample_antibody);
    res.send("Seed Is Done!");
})
)
router.get("/", (req, res) => {
  res.send(sample_antibody);
})

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const antibodies = sample_antibody
    .filter(antibody => antibody.name.toLowerCase()
      .includes(searchTerm.toLowerCase()));
  res.send(antibodies);
})

router.get("/tags", (req, res) => {
  res.send(sample_tags);
})

router.get("/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const antibodies = sample_antibody
    .filter(antibody => antibody.tags?.includes(tagName));
  res.send(antibodies);
})

router.get("/:antibodyId", (req, res) => {
  const antibodyId = req.params.antibodyId;
  const antibody = sample_antibody.find(antibody => antibody.id == antibodyId);
  res.send(antibody);
})

export default router;