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
router.get("/", asynceHandler(
  async(req, res) => {
  const antibodies = await AntibodyModel.find();
  res.send(antibodies);
}))

router.get("/search/:searchTerm", asynceHandler(
  async(req, res) => {
  const searchRegex = new RegExp(req.params.searchTerm, 'i');
  const antibodies = await AntibodyModel.find({name: {$regex:searchRegex}})
  res.send(antibodies);
}))

router.get("/tags", asynceHandler(
  async(req, res) => {
    const tags = await AntibodyModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id: '$tags',
          count:{$sum: 1}
        }
      },
      {
        $project:{
          _id:0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});
    //-1 mean descending

    const all = {
      name: 'All',
      count: await AntibodyModel.countDocuments()
    }
    tags.unshift(all);
    //unshift is opposite of push, add something at begining
  res.send(tags);
}))
// 2 foods 3 tags, after unwind tags => 6foods 1 tag
router.get("/tag/:tagName", asynceHandler(
  async(req, res) => {
  const antibodies= await AntibodyModel.find({tags: req.params.tagName})
  res.send(antibodies);
}))

router.get("/:antibodyId", asynceHandler(
  async(req, res) => {
  const antibody = await AntibodyModel.findById(req.params.antibodyId);
  res.send(antibody);
}))

export default router;