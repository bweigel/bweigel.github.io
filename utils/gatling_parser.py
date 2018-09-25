#!/usr/bin/env python
import json
from dataclasses import dataclass, field, asdict


@dataclass
class GatlingUserLine:
    context: str
    simulation_name: str
    request_no: int
    status: str
    start_time: int
    end_time: int
    duration: int = field(init=False)

    def __post_init__(self):
        self.end_time = int(self.end_time)
        self.start_time = int(self.start_time)
        self.duration = self.end_time - self.start_time


def parse(file_name):
    with open(file_name, 'r') as fi:
        for line in fi.readlines():
            if line.startswith("USER"):
                line_ = GatlingUserLine(*line.rstrip("\n").split("\t"))
                yield asdict(line_)


def save(output_file, gen):
    with open(output_file, 'w') as fo:
        for line in gen:
            if isinstance(line, dict):
                tmp = json.dumps(line)
                fo.write(tmp + "\n")
            else:
                fo.write(line + "\n")


if __name__ == '__main__':
    gen = parse("resources/examplesimulation-1529265922407/simulation.log")
    save("resources/examplesimulation-1529265922407/simulation.jsonl", gen)
