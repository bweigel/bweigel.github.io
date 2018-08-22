require(readr)
require(ggplot2)
require(dplyr)

df = read_csv("/home/bweigel/Projects/bweigel.github.io/resources/examplesimulation-1529265922407/simulation.csv") %>% filter(status == "END")

mean_duration = aggregate(duration~simulation_name, data=df, mean)

ggplot(df , aes(x=duration)) +
  geom_histogram(binwidth = 200) +
  facet_grid(simulation_name~status) +
  geom_vline(aes(xintercept=duration), mean_duration)

