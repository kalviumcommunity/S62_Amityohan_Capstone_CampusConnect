const express = require("express");
const router = express.Router();
const moment = require("moment");

const eventModel = require("../models/event.model.js");

//getting all the events

router.get("/", async (req, res) => {
  try {
    const events = await eventModel.find().populate("organizer", "name");
    return res.status(200).send({ message: "Event fetched", events });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "Internal Server error", error: er.message });
  }
});

// getting event by id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id).populate("organizer", "name");
    if (!event) {
      return res.status(404).send({ message: " Event not found", id });
    }

    return res.status(200).send({ message: "Event found", event });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "Internal server error", error: er.message });
  }
});

//posting a new event

router.post("/add-event", async (req, res) => {
  try {
    const { eventName, eventDescription, date, location, organizer:_organizer } = req.body;

    const organizer = _organizer || req.user._id;
    if (!eventName || !eventDescription || !date || !_organizer || !location) {
      return res.status(400).send({ message: "All fields are required" });
    }

    formattedDate = moment(date, "DD/MM/YY").format("YYYY-MM-DD");

    const newEvent = await eventModel.create({
      eventName: eventName,
      eventDescription: eventDescription,
      date: formattedDate,
      organizer: _organizer,
      location: location,
    });

    return res.status(201).send({ message: "New Event added", newEvent });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "Internal server error", error: er.message });
  }
});

//to update an event

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { eventName, eventDescription, date, organizer, location } = req.body;
    const event = await eventModel.findById(id);

    if (!event) {
      return res.status(404).send({ message: "Event not found" });
    }

    const updatedEvent = await eventModel
      .findByIdAndUpdate(
        id,
        { eventName, eventDescription, date, organizer, location },
        { new: true }
      )
      .populate("organizer", "name");

    if (!updatedEvent) {
      return res.status(404).send({ message: "Event not found" });
    }

    return res.status(201).send({ message: "Event Updated", updatedEvent });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "Internal server error", error: er.message });
  }
});

// to delete an event
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id);
    if (!event) {
      return res.status(404).send({ message: "Event not found", id });
    }

    const deletedEvent = await eventModel.findByIdAndDelete(id);

    return res.status(200).send({ message: "Event deleted", deletedEvent });
  } catch (er) {
    return res
      .status(500)
      .send({ message: "Internal server error", error: er.message });
  }
});

module.exports = router;
